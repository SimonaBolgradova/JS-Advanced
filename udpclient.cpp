#include "udpclient.h"
#include <QUdpSocket>
#include <QLineEdit>

UDPClient::UDPClient(QObject *parent):
    QObject(parent)
{
    socket = new QUdpSocket(this);
    connect(socket,SIGNAL(readyRead()),this,SLOT(readyRead()));
    socket->connectToHost(QHostAddress::LocalHost,7878);

}
void UDPClient::requestData(QString type , QString id, QString event){
    uint16_t DeviceType,DeviceEvent;
    QString  DeviceID;
    QByteArray dataToSend;

       DeviceType = type.toUInt();
       DeviceID = id;
       DeviceEvent = event.toUInt();

       dataToSend.resize(sizeof (DeviceType)+
                         sizeof (DeviceEvent));

       dataToSend[0]= (DeviceType>>8);
       dataToSend[1]= DeviceType;
       dataToSend.insert(2,DeviceID.toUtf8());
       dataToSend[dataToSend.length()-2]= (DeviceEvent>>8);
       dataToSend[dataToSend.length()-1]= DeviceEvent;

    socket->writeDatagram(dataToSend,QHostAddress::LocalHost,7878);
}
void UDPClient::readyRead(){
    QByteArray buffer;
    buffer.resize(socket->pendingDatagramSize());

    QHostAddress sender;
    quint16 senderPort;

    socket->readDatagram(buffer.data(),buffer.size(),&sender,&senderPort);

    qDebug()<<"Response: "<<buffer;
    qDebug()<<"Server's IP: "<<sender;
    qDebug()<<"Server's port: "<<senderPort;
    QString BufferAsString = QString(buffer);
    emit response(BufferAsString);
}
