#ifndef CONTROLLER_H
#define CONTROLLER_H

#include <QObject>
#include "udpclient.h"
#include "mainwindow.h"

class Controller: public QObject
{
    Q_OBJECT
public:
    MainWindow *w;
    Controller();
private:
    void ShowMainWindow();
    UDPClient * udpclient;
signals:
    void DeviceData(QString type , QString id, QString event);
public slots:
    void isPressed(bool isPressed);
};

#endif // CONTROLLER_H
