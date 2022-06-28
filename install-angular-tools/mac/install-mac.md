# Mac - Install Development Tools

In this guide, we will install the following development tools

* Visual Studio Code
* nvm
* node
* npm
* tsc

## Prerequisites
* git: You must have the git command-line tool installed. 

  * To install git, visit: https://git-scm.com/

## Install Visual Studio Code
Visual Studio Code is a general purpose IDE that support many programming languages. Visual Studio code has built-in support for TypeScript.


1. In a web browser, visit https://code.visualstudio.com/

2. Follow the link to download Visual Studio Code for Mac

3. Unzip the downloaded file

4. Move the Visual Studio Code app to your Applications Folder

5. In your Applications Folder, start the Visual Studio Code app


## Install NVM
**nvm** is the [Node Version Manager](https://github.com/nvm-sh/nvm). It allows you to install multiple versions of Node on your computer. Once installed, then you can easily switch to a different version of Node. This is very useful if you want to develop/test using different versions of Node. When you are developing multiple projects, you will most likely need to support different versions of Node. 

The best feature of nvm is that it makes the installation of Node very easy for Mac and Linux system. Historically, to install Node on Mac/Linux, you would have to make frequent use of the "sudo" command to elevate privileges. This was a painful and clunky process during development. Thanks the nvm, we no longer have to use "sudo" when using Node.

Also, the Node ecosystem is a fast moving target and versions change frequently. nvm makes it easy to stay up to date with the latest version of Node. 

The website for nvm is: https://github.com/nvm-sh/nvm

> Note: You must have git installed before running this script.

### Install
1. Open a new terminal window

2. Enter the following commands:

    ```bash
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.0/install.sh | bash
    ```

   The script clones the nvm repository to `~/.nvm` and adds the source line to your profile: `~/.bashrc`.

   You will see output similar to the following:

    ```
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                    Dload  Upload   Total   Spent    Left  Speed
    100 13527  100 13527    0     0  62065      0 --:--:-- --:--:-- --:--:-- 62336
    => Downloading nvm from git to '/Users/luv2code/.nvm'
    => Cloning into '/Users/luv2code/.nvm'...
    remote: Enumerating objects: 286, done.
    ...

    => Appending nvm source string to /Users/luv2code/.bashrc
    => Appending bash_completion source string to /Users/luv2code/.bashrc
    => Close and reopen your terminal to start using nvm or run the following to use it now:

    ...
    ```

3. Apply the new PATH settings with:

    ```bash
    source ~/.bashrc
    ```

4. Update your `~/.bash_profile` file to reference your `~/.bashrc` file. Open the file in VS Code. 

    > The `code` command will launch Visual Studio Code.

    ```
    code ~/.bash_profile
    ```

5. Your `.bash_profile` file should now be open in Visual Studio Code.

5. Add the following text to your `.bash_profile` file:

    ```
    if [ -r ~/.bashrc ]; then
       source ~/.bashrc
    fi
    ```

7. Save your  `bash_profile` file and exit Visual Studio Code.

8. Move back to your terminal window.

9. Verify the installation by typing the following command:

    ```bash
    nvm --version
    ```

   If the installation is successful, you will see the version number.

    > For details on other nvm commands, use `nvm --help` or see the docs: https://github.com/nvm-sh/nvm


## Install Node
Node is the the runtime environment for executing JavaScript code from the command-line. By using Node, you can create any type of application using JavaScript including server-side / backend applications.

In this course, we'll use Node to run applications that we develop using TypeScript and Angular.

1. In your terminal window, type the following command:

    ```bash
    nvm install node
    ```

   You will see the following output

    ```
    Downloading and installing node v12.11.1...
    Downloading https://nodejs.org/dist/v12.11.1/node-v12.11.1-darwin-x64.tar.gz...
    ######################################################################## 100.0%
    Computing checksum with shasum -a 256
    Checksums matched!
    Now using node v12.11.1 (npm v6.11.3)
    Creating default alias: default -> node (-> v12.11.1)
    ```

2. Verify the node installation

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

1. In you terminal window, enter the following command

    ```
    npm install --location=global typescript
    ```

   The `--location=global` installs this as a global package. The TypeScript compiler will be available to all directories for this user.

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

That's it! You have successfully installed the development tools: Visual Studio Code, nvm, node, npm and tsc.


---
&copy; 2022, [luv2code LLC](http://www.luv2code.com) - All rights reserved.