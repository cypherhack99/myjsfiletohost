<!--[ Script to activate ToC ]-->
<script type="text/javascript"> 
  document.addEventListener('DOMContentLoaded', () =>
  new TableOfContents({
      from: document.querySelector('#postBody'),
      to: document.querySelector('#toContent')
  }).generateToc()
);
</script>
