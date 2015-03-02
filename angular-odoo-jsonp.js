/*
 *  odoo jsonp for angular js to avoid CORS(Cross-Origin Resource Sharing).
 *  JSON-RPC-2.0 compatible. spec - http://www.jsonrpc.org/specification
 *
 *  Copyright (C) 2014 Wangbuke <wangbuke@gmail.com>
 *
 *  DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *      Version 2, December 2004
 *
 *  Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>
 *
 *  Everyone is permitted to copy and distribute verbatim or modified
 *  copies of this license document, and changing it is allowed as long
 *  as the name is changed.
 *
 *  DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

 *  0. You just DO WHAT THE FUCK YOU WANT TO.
 *
 *  你他妈的想干嘛就干嘛共有协议
 *    第二版，2004年12月
 *
 *  版权所有(C) 2004 桑·奥塞瓦<sam@hocevar.net>
 *
 *  任何人都有复制与发布本协议的原始或修改过的版本的权利。若本协议被修改，须修改协议名称。
 *
 *  你他妈的想干嘛就干嘛共有协议
 *  条款可供复制、发布和修改
 *
 *  0. 你他妈的想干嘛就干嘛好了。
*/

angular.module('angular-odoo-jsonp', []).config([ "$provide", function($provide) {
    return $provide.decorator('$http', ['$delegate', function($delegate){
            $delegate.odooJsonp = function(url, parameters, config){
                var data = {"jsonrpc": "2.0", "method": "call", "params": parameters, "id" : new Date().getTime()};
                url = url + '?r=' + JSON.stringify(data) + "&jsonp=JSON_CALLBACK";
                return $delegate.jsonp(url, angular.extend({'headers':{'Content-Type': 'application/json'}}, config) );
            };
            return $delegate;
        }]);
}]);
