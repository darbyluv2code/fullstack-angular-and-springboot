# MS Windows - Install Development Tools

In this guide, we will install the following development tools

* Visual Studio Code
* node
* npm
* tsc

## Install Visual Studio Code
Visual Studio Code is a general purpose IDE that support many programming languages. Visual Studio Code has built-in support for TypeScript.

1. In a web browser, visit https://code.visualstudio.com/
2. Follow the link to download Visual Studio Code for MS Windows

3. Run the Installer

4. Follow the steps in the Installer


## Install Node
Node is the the runtime environment for executing JavaScript code from the command-line. By using Node, you can create any type of application using JavaScript including server-side / backend applications.

In this course, we'll use Node to run applications that we develop using TypeScript and Angular.

1. In your web browser, visit https://nodejs.org/en/download/current/

2. Select the **Windows Installer (.msi)** for your system (32-bit or 64-bit)

3. Run the Installer

4. Follow the steps in the Installer

5. Open a **Command Prompt** window to verify the node installation

6. In the **Command Prompt** window, type the following command: 

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

1. In your **Command Prompt** window, enter the following command

    ```
    npm install -g typescript
    ```

   The "-g" installs this as a global package. The TypeScript compiler will be available to all directories for this user.

   You will see something similar to

    ```
    C:\Users\luv2code\AppData\Roaming\npm\tsserver -> C:\Users\luv2code\AppData\Roaming\npm\node_modules\typescript\bin\tsserver
    C:\Users\luv2code\AppData\Roaming\npm\tsc -> C:\Users\luv2code\AppData\Roaming\npm\node_modules\typescript\bin\tsc
    + typescript@3.6.3
    added 1 package from 1 contributor in 3.188s
    ```

2. You can verify the installation

    ```bash
    tsc --version
    ```

   If the installation is successful, you will see the version number.

## Troubleshooting

### Permissions Issue with tsc

1. If you get the following error when executing tsc command using PowerShell:

    ```bash
    tsc : File C:\Users\johndoe\AppData\Roaming\npm\tsc.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.

    At line:1 char:1
    + tsc sample-datatypes.ts
    + ~~~
        + CategoryInfo          : SecurityError: (:) [], PSSecurityException
        + FullyQualifiedErrorId : UnauthorizedAccess
    ```

2. You can resolve this issue with the following steps:

    1. Run Visual Studio Code as **Administrator**

    2. In the Terminal Window of Visual Studio Code, run `Set-ExecutionPolicy RemoteSigned` on PowerShell.

> This troubleshooting tip was contributed by **Fabio Gomes**. Thanks Fabio!!

That's it! You have successfully installed the development tools: Visual Studio Code, node, npm and tsc.


---
&copy; 2019, [luv2code LLC](http://www.luv2code.com) - All rights reserved.