# Updating to Angular 9

Here is an overview of the process for updating to Angular 9.

* Update Angular CLI to version 9
* Baseline Update to Angular 8.x
* Update to Angular 9
* Additional Verification for Update

Detailed steps below.

## Update Angular CLI to version 9

1. Open a terminal window and move into your Angular project directory

```bash
    cd angular-ecommerce
```

2. To update Angular CLI, you need to update it globally and locally. As a result, you need to run both commands below.

```bash
    npm install -g @angular/cli
    npm install --save-dev @angular/cli@latest
```

3. Verify that you are using Angular CLI version 9. Type the following command

```bash
    ng version
```

4. In the output, make note of the following line:

```bash
    Angular CLI: 9.0.1
```

## Baseline Update to Angular 8.x
1. First update to the latest 8.x version. Type the following command:

```bash
    ng update @angular/core@8 @angular/cli@8
```

## Update to Angular 9

1. Now update your project to Angular version 9

```bash
    ng update @angular/core @angular/cli
```

2. During this process you will see status messages such as:

```bash
    Using package manager: 'npm'
    Collecting installed dependencies...
    Found 32 dependencies.
    Fetching dependency metadata from registry...
    Package '@angular/cli' is already up to date.
        Updating package.json with dependency @angular/core @ "9.0.0" (was "8.2.14")...
        Updating package.json with dependency @angular/compiler-cli @ "9.0.0" (was "8.2.14")...
        Updating package.json with dependency @angular/language-service @ "9.0.0" (was "8.2.14")...
        Updating package.json with dependency @angular/animations @ "9.0.0" (was "8.2.14")...
        Updating package.json with dependency @angular/common @ "9.0.0" (was "8.2.14")...
        Updating package.json with dependency @angular/compiler @ "9.0.0" (was "8.2.14")...
        Updating package.json with dependency @angular/forms @ "9.0.0" (was "8.2.14")...
    ...
```

 **_(note your version numbers may vary)_**

3. Eventually, you will see the message below letting you know the update is complete.

    > Your project has been updated to Angular version 9!  

&nbsp;

## Additional Verification for Update 

1. You can also verify the use Angular 9 in your project with this command:

```bash
    ng version
```

2. In the output, make note of the following line _(note your version numbers may vary)_:
```bash
    ...
        Angular: 9.0.0
    ...
```

3. You can also verify the Angular version by viewing the `package.json` file. Recall that the `package.json` file is similar to the Maven `pom.xml` file.

4. In your text editor, view the file: `package.json`

5. Make note of the dependencies section 

```bash
    ...
    "dependencies": {
        "@angular/animations": "~9.0.0",
        "@angular/common": "~9.0.0",
        "@angular/compiler": "~9.0.0",
        "@angular/core": "~9.0.0",
        "@angular/forms": "~9.0.0",
        "@angular/platform-browser": "~9.0.0",
        "@angular/platform-browser-dynamic": "~9.0.0",
        "@angular/router": "~9.0.0",
    ...
```

---

## FAQ: 

Q: **_Will this course use Angular 9?_**

A: Yes, all future videos will use Angular 9.  
&nbsp;  

Q: **_Does the ecommerce project have any deprecated code?_**

A: No, the ecommerce project does not have any deprecated code for Angular 9. The project runs on Angular 9 without any deprecated code or warnings.  
&nbsp;  

Q: **_Where can I find information on all new features in Angular 9?_**

A: You can view the blog post: [_Version 9 of Angular Now Available Project Ivy has arrived_](https://blog.angular.io/version-9-of-angular-now-available-project-ivy-has-arrived-23c97b63cfa3)  
&nbsp;

Q: **_Where can I find details on the update/migration process?_**

A: See the Angular documentation: [Updating to Version 9](https://angular.io/guide/updating-to-version-9)  
&nbsp;


Q: **_I have other Angular apps that I need to update, is there an automated tool or website for this?_**

A: Yes, please see the [Angular Update Guide](https://update.angular.io/). It provides automation and guidance for updating Angular projects.
 
For details on using the Angular Update guide, see the Angular Documentation: [Keeping your Angular projects up-to-date](https://angular.io/guide/updating)
