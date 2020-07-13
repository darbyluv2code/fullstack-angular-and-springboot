# Updating to Angular 10

Here is an overview of the process for updating to Angular 10.

* Update Angular CLI to version 10
* Baseline Update to Angular 9.x
* Update to Angular 10
* Additional Verification for Update

Detailed steps below.

## Update Angular CLI to version 10

1. Open a terminal window and move into your Angular project directory

```bash
    cd angular-ecommerce
```

2. To update Angular CLI, you need to update it globally and locally. As a result, you need to run both commands below.

```bash
    npm install -g @angular/cli
    npm install --save-dev @angular/cli@latest
```

3. Verify that you are using Angular CLI version 10. Type the following command

```bash
    ng version
```

4. In the output, make note of the following line:

```bash
    Angular CLI: 10.0.2
```

## Baseline Update to Angular 9.x
1. First update to the latest 9.x version. Type the following command:

```bash
    ng update @angular/core@9 @angular/cli@9
```

## Update to Angular 10

1. Now update your project to Angular version 10

```bash
    ng update @angular/core @angular/cli
```

2. During this process you will see status messages such as:

```bash
    Using package manager: 'npm'
    Collecting installed dependencies...
    ...
```

3. Eventually, you will see the message below letting you know the update is complete.

    > Your project has been updated to Angular version 10!  

&nbsp;

## Additional Verification for Update 

1. You can also verify the use Angular 10 in your project with this command:

```bash
    ng version
```

2. In the output, make note of the following line _(note your version numbers may vary)_:
```bash
    ...
        Angular: 10.0.3
    ...
```

---

## FAQ: 

Q: **_Will this course use Angular 10?_**

A: Yes, all future videos will use Angular 10.  
&nbsp;  

Q: **_Does the ecommerce project have any deprecated code?_**

A: No, the ecommerce project does not have any deprecated code for Angular 10. The project runs on Angular 10 without any deprecated code or warnings.  
&nbsp;  

Q: **_Where can I find information on all new features in Angular 10?_**

A: You can view the blog post: [_version 10 of Angular Now Available_](https://blog.angular.io/version-10-of-angular-now-available-78960babd41)  
&nbsp;

Q: **_Where can I find details on the update/migration process?_**

A: See the Angular documentation: [Updating to version 10](https://update.angular.io/)  
&nbsp;


Q: **_I have other Angular apps that I need to update, is there an automated tool or website for this?_**

A: Yes, please see the [Angular Update Guide](https://update.angular.io/). It provides automation and guidance for updating Angular projects.
 
For details on using the Angular Update guide, see the Angular Documentation: [Keeping your Angular projects up-to-date](https://angular.io/guide/updating)
