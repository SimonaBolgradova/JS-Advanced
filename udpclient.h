#ifndef UDPCLIENT_H
#define UDPCLIENT_H

#include <QObject>
#include <QUdpSocket>
#include <QLineEdit>
#include <QPlainTextEdit>
class UDPClient :public QObject
{
    Q_OBJECT
public:
    explicit UDPClient(QObject*parent =0);
private :
    QUdpSocket * socket;
signals:
    void response(QString buffer);
public slots:
    void requestData(QString type , QString id, QString event);
    void readyRead();
};

#endif // UDPCLIENT_H
