A='<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Wise Words of Dr. Lector</title>
      <link rel="stylesheet" href="codex.css">
      <script src="codex.js"></script>
  </head>
  <body>
BODY
  </body>
</html>'

B=$(pandoc -f markdown-auto_identifiers-implicit_figures content.md)

echo "${A/BODY/$B}" > index.html