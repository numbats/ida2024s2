# ETC1010/5510: Introduction to Data Analysis

The extensions including `coatless/webr` and `monash` are tweaked. Please copy those extensions as is.

There are some features that could be useful for your slides

## Image as icon

To display an image file as an icon, use it as a class for an `<img>` element. This is useful for including images in titles or text.

```css
.png-icon {
  height:1em;
  width:1.13em;
  vertical-align:-0.125em;
  margin-left:auto;
  margin-right:auto;
  font-size:inherit;
  fill:currentColor;
  overflow:visible;
  position:relative;
  margin-top:0px !important;
  margin-bottom:0px !important;
}
```

## Clock

`_extensions/monash/assets/time.js` includes a `refreshTime()` function that updates the content of an HTML element every second based on the current time. This function powers the clock displayed in the slide footer. You can customize the element ID, time format, time zone, and update frequency to suit your needs.

## `quarto-web`

`_extensions/coatless/webr` is a Quarto WebR extension. It powers the interactive R console in the slide. The document can be found in [https://quarto-webr.thecoatlessprofessor.com/](https://quarto-webr.thecoatlessprofessor.com/). Here I provide a FAQ.

 ### 1. How do I include `quarto-webr` in my slide?

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

### 2. How do I run `quarto-webr` code in the background?

There are three context types for `quarto-webr` code chunks: interactive, output, and setup. You can specify the context as shown below:

~~~
```{webr-r}
#| context: interactive
summary(cars)
```
~~~

The `output` context type hides the code and only displays the results. Setting `echo: true` will still not display the code.

The `setup` context type runs the code in the background but may take up space during the webR initialization and display some startup messages. To suppress this, you can wrap the code chunk with:

```
::: {style="display: none;"}
:::
```
### 3. How do I adjust the font size of the `quarto-webr` code?

To adjust the font size of `quarto-webr` code chunks, you can set the `editor-font-scale` individually for each chunk or apply it globally with:

```yaml
webr:
  cell-options:
    editor-font-scale: 0.6
```

The default value for Quarto slides is 0.5. This setting scales the font size relative to the page font size.

### 4. How can I disable editing in `quarto-webr` code chunks?

Set `read-only` to `true` for the code chunk.

### 5. How can I control the maximum height of the `quarto-webr` editor to prevent it from growing indefinitely? 

You can set `editor-max-height` for individual code chunks or globally. The value is specified in pixels.

### 6. How can I automatically run the `quarto-webr` code chunk when the HTML file opens?

You can set `autorun` to `true` for individual code chunks or globally.

### 7. Why does some `quarto-webr` code produce no output, even when run manually?

This might be because you set `message` and `warning` to false, which suppresses all messages, including warnings and errors. If an error occurs, the code cannot be executed.

### 8. Can I use interactive plots, such as those created with `ggplotly`, in `quarto-webr`?

No, this feature is not currently supported, and implementing it is quite complex. It isn't likely to be supported anytime soon.


### 9. Can I turn off the vertical line suggestion in `quarto-webr` code chunks?

Yes, but you’ll need to modify the extension directly. In `_extensions/coatless/webr/qwebr-monaco-editor-element.js`, locate the `monaco.editor.create()` method and add `guides: { indentation: false }`. This will disable the indentation guides. For a full list of available options, refer to the [Monaco Editor documentation](https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IStandaloneEditorConstructionOptions.html).

### 10. How do I control the code output height?

You need to adjust the CSS for the `quarto-webr` output code area as follows:

```css
.h300-webr-pre-output .qwebr-output-code-area pre {
  max-height: 500px !important;
}
```

When you wrap the `quarto-webr` code chunk with this class, the maximum height of it will be limited

~~~
::: {.h300-webr-pre-output}

```{webr-r}
lapply(1:100, rnorm)
```

:::
~~~

### 10. How do I control the height of the code output?

To control the height of the `quarto-webr` output, you need to modify the CSS for the output code area:

```css
.h300-webr-pre-output .qwebr-output-code-area pre {
  max-height: 500px !important;
}
```

Wrap the `quarto-webr` code chunk with this class to limit its maximum height:

~~~
::: {.h300-webr-pre-output}

```{webr-r}
lapply(1:100, rnorm)
```

:::
~~~

### 11. Can I customize the syntax highlighting in the `quarto-webr` code editor?

Yes, it's possible, but it's not straightforward. For more details, see the [Monarch documentation](https://microsoft.github.io/monaco-editor/monarch.html).


### 12. Can I customize the syntax highlighting in the `quarto-webr` code output?

Yes, you can use existing tools like `prismjs` to modify the `<code>` elements directly.

### 13. Why does the `quarto-webr` code sometimes run automatically but throw an error when run manually?

This could be because a variable is overridden in a later `quarto-webr` code chunk. Similar to RMarkdown, code chunks in `quarto-webr` are not independent and can affect one another.

### 14. How can I install packages?

Specify the packages in the YAML header:

```yaml
webr:
  packages: ['tidyverse', 'nycflights13']
```

### 15. I have installed the packages. Why can’t I use their functions?

Make sure to load the packages using `library()`, or set:

```yaml
webr:
  packages: ['tidyverse', 'nycflights13']
  autoload-packages: true
```
### 16. Can I remove the startup message from the title page?

Yes, you can disable it by adding the following to your YAML header:

```yaml
webr:
  show-startup-message: false
```
