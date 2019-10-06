# MS Windows - Install Development Tools

In this guide, we will install the following development tools

* Visual Studio Code
* node
* npm
* tsc

## Install Visual Studio Code
Visual Studio Code is a general purpose IDE that support many programming languages. Visual Studio Code has built-in support for TypeScript.

1. In a web browser, visit https://code.visualstudio.com/

2. Follow the link to download Visual Studio Code for the MS Windows

3. Run the Installer

4. Follow the steps in the Installer


## Install Node
Node is the the runtime environment for executing JavaScript code from the command-line. By using Node, you can create any time of application using JavaScript including server-side / backend applications.

In this course, we'll use Node to run applications that we develop using TypeScript and Angular.

1. In your web browser, visit https://nodejs.org/en/download/current/

2. Select the **Windows Installer (.msi)** for your system (32-bit or 64-bit)

3. Run the Installer

4. Follow the steps in the Installer

5. Open a Command-Prompt window to verify the node installation

6. In the command prompt window, type the following command: 

    ```bash
    node --version
    ```

   If the installation is successful, you will see the version number

   > Note: The Node installation also includes npm (Node Package Manager).

3. Verify npm is installed

    ```bash
    npm --version
    ```

   If the installation is successful, you will see the version number. 

   > Note: node will have a different number than npm. This is similar to a different Java JDK version number compared to Maven version number.
   >
   > In this example, node is similar to the Java JDK.  And npm is similar to Maven.

## Install tsc
tsc is the TypeScript compiler. We use tsc to compile TypeScript code into JavaScript code. We can install the TypeScript compile using the Node Package Manager (npm)

1. In your Command Prompt window, enter the following command

    ```
    npm install -g typescript
    ```

   The "-g" installs this as a. global package. The TypeScript compiler will be available to all directories for this user.

   You will see something similar to

    ```
    /Users/luv2code/.nvm/versions/node/v12.11.1/bin/tsc -> /Users/luv2code/.nvm/versions/node/v12.11.1/lib/node_modules/typescript/bin/tsc
    /Users/luv2code/.nvm/versions/node/v12.11.1/bin/tsserver -> /Users/luv2code/.nvm/versions/node/v12.11.1/lib/node_modules/typescript/bin/tsserver
    + typescript@3.6.3
    added 1 package from 1 contributor in 1.526s
    ```

2. You can verify the installation

    ```bash
    tsc --version
    ```

   If the installation is successful, you will see the version number.

That's it! You have successfully installed the development tools: Visual Studio Code, node, npm and tsc.


Copyright 2019, luv2code LLC - All rights reserved.