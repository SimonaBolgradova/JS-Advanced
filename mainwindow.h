#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include "udpclient.h"
QT_BEGIN_NAMESPACE
namespace Ui { class MainWindow; }
QT_END_NAMESPACE
class UDPClient;
class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private:
    Ui::MainWindow *ui;
    UDPClient *udpclient;
    QString type;
    QString id;
    QString event;
signals:
    void DeviceData(QString type , QString id, QString event);
    void isPressed(bool isPressed);
public slots:
    void makeConnectionWithController();
    void modifyText(QString buffer);
    void clearText();
};
#endif // MAINWINDOW_H
