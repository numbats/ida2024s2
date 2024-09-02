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
### 3. How do I adjust the font size of the webR code?

To adjust the font size of webR code chunks, you can set the `editor-font-scale` individually for each chunk or apply it globally with:

```yaml
webr:
  cell-options:
    editor-font-scale: 0.6
```

The default value for Quarto slides is 0.5. This setting scales the font size relative to the page font size.

### 4. How can I disable editing in webR code chunks?

Set `read-only` to `true` for the code chunk.

### 5. How can I control the maximum height of the webR editor to prevent it from growing indefinitely? 

You can set `editor-max-height` for individual code chunks or globally. The value is specified in pixels.

### 6. How can I automatically run the webR code chunk when the HTML file opens?

You can set `autorun` to `true` for individual code chunks or globally.

### 7. Why does some webR code produce no output, even when run manually?

This might be because you set `message` and `warning` to false, which suppresses all messages, including warnings and errors. If an error occurs, the code cannot be executed.

