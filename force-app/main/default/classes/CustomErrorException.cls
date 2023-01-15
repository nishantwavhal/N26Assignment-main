/*
Author: Nishant Mohan Wavhal
Aura Enabled Created Date: 14/1/2023
Custom Error Exception Class
*/

public class CustomErrorException extends Exception{

    public String message;
    public String errorCode;
    public CustomErrorException(String errorCode, string message){
        this.errorCode = errorCode;
        this.message = message;
    }
}