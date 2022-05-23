#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    connect(ui->pushButton,SIGNAL(clicked()),this, SLOT (makeConnectionWithController()));
}

MainWindow::~MainWindow()
{
    delete ui;
}
void MainWindow :: makeConnectionWithController(){
    type = ui->lineEdit->text();
    id = ui->lineEdit_2->text();
    event = ui->lineEdit_3->text();
    emit DeviceData(type, id, event);
    emit isPressed (true);
}

void MainWindow::modifyText(QString buffer)
{
    ui->plainTextEdit->setPlainText(buffer);
}
void MainWindow::clearText(){
    ui->lineEdit->clear();
    ui->lineEdit_2->clear();
    ui->lineEdit_3->clear();
}
