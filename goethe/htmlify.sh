A='<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Wise Words of Goethe</title>
  </head>
  <body>
BODY
  </body>
</html>'

B=$(pandoc -f markdown-auto_identifiers-implicit_figures content.md)

echo "${A/BODY/$B}" > index.html