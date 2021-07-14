# Keytool Setup - Generate key and self-signed certificate

This document includes instructions for generating a key and self-signed certificate using [Keytool](https://docs.oracle.com/en/java/javase/13/docs/specs/man/keytool.html). 

> :ballot_box_with_check: NOTE: Keytool is already installed with the Java Development Kit. No additional installed is required.

## Generate Key and Self-Signed Certificate

1. Open a terminal/command-prompt window.

2. Move into the directory of your Spring Boot ecommerce project.

    ```
    cd spring-boot-ecommerce
    ```

3. In the terminal window, run this command to generate the key and certificate. This is one long command, copy/paste in its entirety.

    ```
    keytool -genkeypair -alias luv2code -keystore src/main/resources/luv2code-keystore.p12 -keypass secret -storeType PKCS12 -storepass secret -keyalg RSA -keysize 2048 -validity 365 -dname "C=US, ST=Pennsylvania, L=Philadelphia, O=luv2code, OU=Training Backend, CN=localhost" -ext "SAN=dns:localhost"
    ```

    | Argument | Description |
    | --- | --- |
    | -genkeypair | Generates a key pair |
    | -alias | Alias name of the entry to process |
    | -keystore | Name of output keystore file |
    | -keypass | Key password |
    | -storeType | Keystore type |
    | -storepass | Keystore password
    | -keyalg | Key algorithm name |
    | -keysize | Key bit size |
    | -validity | Validity number of days |
    | -dname | Distinguished name |
    | -ext | Add the given X.509 extension |

    > Detailed docs available [here](https://docs.oracle.com/en/java/javase/13/docs/specs/man/keytool.html). 

3. The command generates the file: `src/main/resources/luv2code-keystore.p12` .

## Verify Results

1. View the contents of your certificate.

    ```
    keytool -list -v -alias luv2code -keystore src/main/resources/luv2code-keystore.p12 -storepass secret
    ```

    _Sample Output_
    ```    
    Alias name: luv2code
    Creation date: Jul 11, 2021
    Entry type: PrivateKeyEntry
    Certificate chain length: 1
    Certificate[1]:
    Owner: C=US, ST=Pennsylvania, L=Philadelphia, O=luv2code, OU=Training Backend, CN=localhost
    Issuer: C=US, ST=Pennsylvania, L=Philadelphia, O=luv2code, OU=Training Backend, CN=localhost
    Serial number: 9f1898a717a75375
    Valid from: Sun Jul 11 00:02:10 EDT 2021 until: Mon Jul 11 00:02:10 EDT 2022
    Certificate fingerprints:
            SHA1: B6:14:8C:5F:0C:86:D6:32:3C:FC:D6:7E:2C:AD:AF:29:60:32:4F:38
            SHA256: E1:B7:C7:ED:CE:1F:EE:C7:36:20:07:E4:51:5D:5D:3A:78:27:65:E5:E4:9C:EB:20:90:85:D8:1A:A4:EF:69:41
    Signature algorithm name: SHA256withRSA
    Subject Public Key Algorithm: 2048-bit RSA key
    Version: 3

    Extensions: 

    #1: ObjectId: 2.5.29.17 Criticality=false
    SubjectAlternativeName [
    DNSName: localhost
    ]

    #2: ObjectId: 2.5.29.14 Criticality=false
    SubjectKeyIdentifier [
    KeyIdentifier [
    0000: 0B 7D AA 0B 04 0F A5 20   51 5B FB C2 A3 DC 9B 78  ....... Q[.....x
    0010: 19 9F 85 48                                        ...H
    ]
    ]
    ```

## Spring Boot HTTPS configs

1. Edit your `application.properties` file

1. Add this snippet for Spring Boot SSL configs to the end of your `application.properties` file

    ```
    #####
    #
    # HTTPS configuration
    #
    #####

    # Server web port
    server.port=8443

    # Enable HTTPS support (only accept HTTPS requests)
    server.ssl.enabled=true

    # Alias that identifies the key in the key store
    server.ssl.key-alias=luv2code

    # Keystore location
    server.ssl.key-store=classpath:luv2code-keystore.p12

    # Keystore password
    server.ssl.key-store-password=secret

    # Keystore format
    server.ssl.key-store-type=PKCS12
    ```

Congrats! You have successfully configured your Spring Boot project to use a self-signed certificate for https. You can now return to the videos and continue with the course.

