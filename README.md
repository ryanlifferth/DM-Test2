# DataMaster Web NG application


## Packages

### Packages for Bootstrap
The application uses Bootstrap for UI display.  For the most part we try to do all
element and DOM manipulation through the Angular (NG) framework.  However, there are a few 
instances where we needed to use Bootstrap JS functionality (e.g., modals), which
is dependent on jQuery.  So for those we used the following to NPM packages
```bash
npm i @types/jquery 
```
*https://www.npmjs.com/package/@types/jquery*

and
```bash
npm i @types/bootstrap 
```
*https://www.npmjs.com/package/@types/bootstrap*

Then to get the types available throughout the app open the **src/app/tsconfig.spec.json** file and add the following entry:
```javascript
"types": ["jquery", "bootstrap"]
```
in the compiler options section.

```typescript
$("#exampleModal").modal("show");
```






## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
