# collapse
列表展开收起jquery插件
##Demo
*[Demo](http://htmlpreview.github.io/?https://github.com/dodoroy/collapse/blob/master/test/index.html)*


![screen](https://raw.github.com/dodoroy/collapse/master/test/img1.png)
![screen](https://raw.github.com/dodoroy/collapse/master/test/img2.png)

## Usage
1. Include jQuery and collapse.min.js

```html
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="collapse.min.js"></script>
```
2. Create a HTML strcture
```html
<div class="item-list">	
  <div class="item"><div class="collapseBtn"><span class="collapseText">展开</span></div>
    <div class="list0">	
      <p>1111</p>
    </div>
    <div class="list1">	
      <p>22</p>
      <p>33</p>
    </div>
    <div class="list2">	
      <p>4</p>
      <p>5</p>
    </div>
  </div>
  <!-- ... -->
</div>
```
3. Call collapse()

```JavaScript
new Collapse('.item-list');
or
$('.item-list').collapse(
  /* options*/
);
```
