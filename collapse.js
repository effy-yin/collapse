(function($) {

    'use strict';

    function Collapse(wrapper, options) {

        var defaults = {
            toggleBtn: '.collapseBtn',
            toggleText: '.collapseText',
            hoverClass: 'on',
            openClass: 'open',
            item: '.item',
            list1: '.list1',
            list2: '.list2'
        }

        this.settings = $.extend(defaults, options);
        this.$wrapper = $(wrapper);
        this.$item = this.$wrapper.find(this.settings.item);
        this.$toggleBtn = this.$wrapper.find(this.settings.toggleBtn);

        this.init();

        this.bindHandler();
    }

    Collapse.prototype = {
        init: function() {

            var _self = this;

            _self.$item.each(function() {
               $(this).find(_self.settings.list2).hide(); 
            });
        },

        bindHandler: function() {

            var _self = this;

            this.$toggleBtn.hover(function() {

                $(this).toggleClass(_self.settings.hoverClass);

            }).click(function() {

                var $_this = $(this),
                    $_item = $_this.parent(_self.settings.item);

                
                if (!$_item.hasClass(_self.settings.openClass)) {                    
                    // 展开
                    var index = _self.$item.index($_item);

                    $_item.siblings().each(function() {
                        $(this).find(_self.settings.list1).slideDown('fast');
                        $(this).find(_self.settings.list2).slideUp('fast');
                    });

                    if(_self.$wrapper.find('.' + _self.settings.openClass).length > 0) {
                        $_item.siblings('.' + _self.settings.openClass)
                            .removeClass(_self.settings.openClass)
                            .find(_self.settings.toggleText).html('展开');
                    }

                    if (index == _self.$item.length - 1) {
                        $_item.prev().find(_self.settings.list1).slideUp('fast');
                        $_item.prev().find(_self.settings.list2).slideUp('fast');
                    } else {
                        $_item.next().find(_self.settings.list1).slideUp('fast');
                        $_item.next().find(_self.settings.list2).slideUp('fast');
                    }

                    $_this.find(_self.settings.toggleText).html('收起');
                    $_item.addClass(_self.settings.openClass)
                        .find(_self.settings.list1).slideDown('fast');
                    $_item.find(_self.settings.list2).slideDown('fast');
                        
                } else {    
                    // 收起
                    $_this.find(_self.settings.toggleText).html('展开');
                    $_item.removeClass(_self.settings.openClass)
                        .find(_self.settings.list2).slideUp('fast');

                    _self.$item.each(function() {
                        $(this).find(_self.settings.list1).slideDown('fast');
                        $(this).find(_self.settings.list2).slideUp('fast');                        
                    });
                }
            });
        }
    }

    window.Collapse = Collapse;

    $.fn.collapse = function(options) {

        var instance =  new Collapse(this, options);

        return $(this);
    }


})(jQuery);