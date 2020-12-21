# Lilou - trippy shadow

from scrollytell: https://bboylilou.redbull.com/en
picture that has a trail of itself

```
<div class="img-wrapper">
    <img src="https://bboylilou.redbull.com/en/wp-content/uploads/sites/2/2017/10/1999.png" alt="Year 1997">
    <img src="https://bboylilou.redbull.com/en/wp-content/uploads/sites/2/2017/10/1999.png" class="shadow-1" alt="Year 1997" style="transform: translate3d(0px, 0px, 0px);">
    <img src="https://bboylilou.redbull.com/en/wp-content/uploads/sites/2/2017/10/1999.png" class="shadow-2" alt="Year 1997" style="transform: translate3d(0px, 0px, 0px);">
</div>
```

```
    return o(i, e), a(i, [{ key: "init", value: function() { this.setSelectors(), l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "init", this).call(this) } }, { key: "setSelectors", value: function() { this.$headHome = this.domElem.find(".head-home"), this.$homeImg = this.$headHome.find(".img-wrapper"), this.$homeImgShadow1 = this.$homeImg.find(".shadow-1"), this.$homeImgShadow2 = this.$homeImg.find(".shadow-2"), this.$title = this.$headHome.find(".title"), this.$stroke1 = this.$title.find(".stroke-1"), this.$stroke2 = this.$title.find(".stroke-2"), 
    [...],
    Object.getPrototypeOf(i.prototype), "bind", this).call(this), this.$homeImgShadow1.length && this.$homeImgShadow2.length && (this.homeImgShadow1 = new g.default(this.$homeImgShadow1[0], { animVelocity: .1 }), this.homeImgShadow2 = new g.default(this.$homeImgShadow2[0], { animVelocity: .1 })), this.stroke1 = [], this.stroke2 = [], this.$stroke1.length && this.$stroke2.length) { for (var t = this.$stroke1.length - 1; t >= 0; t--) this.stroke1[t] = new g.default(this.$stroke1[t], { animVelocity: .1 }); for (var t = this.$stroke2.length - 1; t >= 0; t--) this.stroke2[t] = new g.default(this.$stroke2[t], { animVelocity: .1 }) }
```

function: 3 times the same picture that changes y value according to speed of scrolling


???     transition: transform 1.3s cubic-bezier(.9,0,.1,1) .1s;
}
