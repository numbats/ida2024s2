# ETC1010/5510: Introduction to Data Analysis

The extensions including `coatless/webr` and `monash` are tweaked. Please copy those extensions as is.

## Features that could be useful for your slides

- `_extensions/monash/assets/time.js` includes a `refreshTime()` function that updates the content of an HTML element every second based on the current time. This function powers the clock displayed in the slide footer. You can customize the element ID, time format, time zone, and update frequency to suit your needs.
- `_extensions/coatless/webr` is a Quarto WebR extension. It powers the interactive R console in the slide. The document can be found in [https://quarto-webr.thecoatlessprofessor.com/](https://quarto-webr.thecoatlessprofessor.com/). Here I provide a FAQ.

 ### 1. How do I include webR in my slide?

 1. Copy the extension to your project or install it using the instructions at [https://github.com/coatless/quarto-webr/](https://github.com/coatless/quarto-webr/)
 2. Define the filters for your Quarto slides as follows:
```yaml
filters: 
  - webr
```
3. Use {webr-r} for your code chunks, for example:

~~~
```{webr-r}
summary(cars)
```
~~~
4. Keep in mind that standard R code chunks `{r}` do not interact with the environment of `{webr-r}`.

### 2. How do I run webR code in the background?

There are three context types for webR code chunks: interactive, output, and setup. You can specify the context as shown below:

~~~
```{webr-r}
#| context: interactive
summary(cars)
```
~~~

The `output` context type hides the code and only displays the results. Setting `echo: true` will still not display the code.

The `setup` context type runs the code in the background but may take up space during the webR initialization and display some startup messages. To suppress this, you can wrap the code chunk with:

```
::: {display: none}
:::
```
