#include "controller.h"

Controller::Controller()
{
    w = new MainWindow() ;
    udpclient = new UDPClient(this);
    ShowMainWindow();
    connect(w, SIGNAL(DeviceData(QString,QString,QString)),udpclient,SLOT(requestData(QString,QString,QString)));
    connect(w, SIGNAL(isPressed(bool)),this, SLOT(isPressed(bool)));
}

void Controller:: ShowMainWindow(){
    w->show();
}

void Controller::isPressed(bool isPressed)
{
    if(isPressed){
    connect(udpclient,SIGNAL(response(QString)),w,SLOT(modifyText(QString)));
    connect(udpclient,SIGNAL(response(QString)),w,SLOT(clearText()));
    }
}
