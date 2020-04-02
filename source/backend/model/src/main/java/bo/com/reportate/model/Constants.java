package bo.com.reportate.model;

/**
 * Created by :MC4
 * Autor      :Ricardo Laredo
 * Email      :rlaredo@mc4.com.bo
 * Date       :12-01-19
 * Project    :reportate
 * Package    :bo.com.reportate.model
 * Copyright  : MC4
 */

public interface Constants {

    interface Domain{

    }

    interface Parameters{
        //Parametros de LDAP
        String AD_DOMAIN = "AD_DOMAIN";
        String AD_SECURITY_AUTHENTICATION = "AD_SECURITY_AUTHENTICATION";

        //CONFIGURACION DE CORREO
        String MAIL_SMTP_AUTH = "MAIL_SMTP_AUTH";
        String MAIL_SMTP_STARTTLS_ENABLE ="MAIL_SMTP_STARTTLS_ENABLE";
        String MAIL_HOST="MAIL_HOST";
        String MAIL_PORT = "MAIL_PORT";
        String MAIL_PROTOCOL = "MAIL_PROTOCOL";
        String MAIL_USERNAME = "MAIL_USERNAME";
        String MAIL_PASS = "MAIL_PASSWORD";
        String MAIL_FROM = "MAIL_FROM";
    }
}

