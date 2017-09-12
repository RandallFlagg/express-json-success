## Functions

<dl>
<dt><a href="#success">success(app, [opts])</a></dt>
<dd><p>Wrapper method</p>
</dd>
</dl>

<a name="success"></a>

## success(app, [opts])
Wrapper method

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>app</td><td><code>Object</code></td><td></td><td><p>Express app</p>
</td>
    </tr><tr>
    <td>[opts]</td><td><code>Object</code></td><td></td><td><p>options</p>
</td>
    </tr><tr>
    <td>[opts.defaultOk]</td><td><code>string</code></td><td><code>&quot;ok&quot;</code></td><td><p>default &quot;ok&quot; message</p>
</td>
    </tr><tr>
    <td>[opts.defaultFailed]</td><td><code>string</code></td><td><code>&quot;failed&quot;</code></td><td><p>default &quot;failed&quot; message</p>
</td>
    </tr><tr>
    <td>[opts.onTrue]</td><td><code>function</code></td><td><code></code></td><td><p>callback on true success</p>
</td>
    </tr><tr>
    <td>[opts.onFalse]</td><td><code>function</code></td><td><code></code></td><td><p>callback on false success</p>
</td>
    </tr><tr>
    <td>[opts.callbackQuery]</td><td><code>string</code></td><td><code>&quot;callback&quot;</code></td><td><p>JSONP callback query param</p>
</td>
    </tr><tr>
    <td>[opts.callbackName]</td><td><code>string</code></td><td><code>&quot;cb&quot;</code></td><td><p>JSONP callback function name</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
const express = require('express');const success = require('express-json-success');const app = new express();success(app);app.use((req, res) => {     res.success(true, 'done', 'a result');});
```
<a name="response"></a>

## ~response
Express request

**Kind**: inner parameter  

* [~response](#response)
    * [.success(success, [message], [result], [code])](#response.success)
    * [.successTrue([message], [result], [code])](#response.successTrue)
    * [.successFalse([message], [result], [code])](#response.successFalse)
    * [.successIf(result, [opts])](#response.successIf)
    * [.successIfNotEmpty(result, [opts])](#response.successIfNotEmpty)
    * [.success400([message], [result])](#response.success400)
    * [.success401([message], [result])](#response.success401)
    * [.success402([message], [result])](#response.success402)
    * [.success403([message], [result])](#response.success403)
    * [.success404([message], [result])](#response.success404)
    * [.success405([message], [result])](#response.success405)
    * [.success406([message], [result])](#response.success406)
    * [.success407([message], [result])](#response.success407)
    * [.success408([message], [result])](#response.success408)
    * [.success409([message], [result])](#response.success409)
    * [.success410([message], [result])](#response.success410)
    * [.success411([message], [result])](#response.success411)
    * [.success412([message], [result])](#response.success412)
    * [.success413([message], [result])](#response.success413)
    * [.success414([message], [result])](#response.success414)
    * [.success415([message], [result])](#response.success415)
    * [.success416([message], [result])](#response.success416)
    * [.success417([message], [result])](#response.success417)
    * [.success418([message], [result])](#response.success418)
    * [.success417([message], [result])](#response.success417)
    * [.success421([message], [result])](#response.success421)
    * [.success422([message], [result])](#response.success422)
    * [.success423([message], [result])](#response.success423)
    * [.success424([message], [result])](#response.success424)
    * [.success425([message], [result])](#response.success425)
    * [.success426([message], [result])](#response.success426)
    * [.success428([message], [result])](#response.success428)
    * [.success429([message], [result])](#response.success429)
    * [.success431([message], [result])](#response.success431)
    * [.success500([message], [result])](#response.success500)
    * [.success501([message], [result])](#response.success501)
    * [.success502([message], [result])](#response.success502)
    * [.success503([message], [result])](#response.success503)
    * [.success504([message], [result])](#response.success504)
    * [.success505([message], [result])](#response.success505)
    * [.success506([message], [result])](#response.success506)
    * [.success507([message], [result])](#response.success507)
    * [.success508([message], [result])](#response.success508)
    * [.success509([message], [result])](#response.success509)
    * [.success510([message], [result])](#response.success510)
    * [.success511([message], [result])](#response.success511)

<a name="response.success"></a>

### response.success(success, [message], [result], [code])
Express response method

**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>success</td><td><code>boolean</code></td><td></td><td><p>response success</p>
</td>
    </tr><tr>
    <td>[message]</td><td><code>string</code></td><td></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td><code></code></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr><tr>
    <td>[code]</td><td><code>number</code></td><td><code>200</code></td><td><p>status server code</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
app.use((req, res) => {     res.success(true, 'done', 'a result', 200);     // Response output example     {        "success": true,        "code": 200,        "message": "done",        "result": "a result",        "time": "0000-00-00T00:00:00.000Z"     }});
```
**Example**  
```js
app.use((req, res) => {     res.success(false, 'ops...', null, 401);     // Response output example     {        "success": false,        "code": 401,        "message": "ops...",        "result": null,        "time": "0000-00-00T00:00:00.000Z"     }});
```
<a name="response.successTrue"></a>

### response.successTrue([message], [result], [code])
This method respond as success to true

**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr><tr>
    <td>[code]</td><td><code>number</code></td><td><p>status server code</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
app.use((req, res) => {     res.successTrue();     // Response output example     {        "success": true,        "code": 200,        "message": "ok",        "result": null,        "time": "0000-00-00T00:00:00.000Z"     }});
```
**Example**  
```js
app.use((req, res) => {     res.successTrue('done');     // Response output example     {        "success": true,        "code": 200,        "message": "done",        "result": null,        "time": "0000-00-00T00:00:00.000Z"     }});
```
**Example**  
```js
app.use((req, res) => {     res.successTrue('done', 'a result');     // Response output example     {        "success": true,        "code": 200,        "message": "done",        "result": "a result",        "time": "0000-00-00T00:00:00.000Z"     }});
```
<a name="response.successFalse"></a>

### response.successFalse([message], [result], [code])
This method respond as success to false

**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr><tr>
    <td>[code]</td><td><code>number</code></td><td><p>status server code</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
app.use((req, res) => {     res.successFalse();     // Response output example     {        "success": false,        "code": 200,        "message": "failed",        "result": null,        "time": "0000-00-00T00:00:00.000Z"     }});
```
**Example**  
```js
app.use((req, res) => {     res.successFalse('ops...');     // Response output example     {        "success": false,        "code": 200,        "message": "ops...",        "result": null,        "time": "0000-00-00T00:00:00.000Z"     }});
```
**Example**  
```js
app.use((req, res) => {     res.successFalse('ops...', false);     // Response output example     {        "success": false,        "code": 200,        "message": "ops...",        "result": false,        "time": "0000-00-00T00:00:00.000Z"     }});
```
<a name="response.successIf"></a>

### response.successIf(result, [opts])
Return success considering truthy or falsy of result param

**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>result</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr><tr>
    <td>[opts]</td><td><code>Object</code></td><td></td><td><p>option configuration</p>
</td>
    </tr><tr>
    <td>[opts.messageOk]</td><td><code>string</code></td><td><code>&quot;ok&quot;</code></td><td><p>&quot;ok&quot; message</p>
</td>
    </tr><tr>
    <td>[opts.messageFailed]</td><td><code>string</code></td><td><code>&quot;failed&quot;</code></td><td><p>&quot;failed&quot; message</p>
</td>
    </tr><tr>
    <td>[opts.codeOk]</td><td><code>number</code></td><td><code>200</code></td><td><p>status &quot;ok&quot; code</p>
</td>
    </tr><tr>
    <td>[opts.codeFailed]</td><td><code>number</code></td><td><code>500</code></td><td><p>status &quot;failed&quot; code</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// Falsy resultapp.use((req, res) => {     const result = 0;     res.successIf(result);     // Response output example     {        "success": false,        "code": 500,        "message": "failed",        "result": 0,        "time": "0000-00-00T00:00:00.000Z"     }});
```
**Example**  
```js
// Truthy resultapp.use((req, res) => {     const result = 123;     res.successIf(result);     // Response output example     {        "success": true,        "code": 200,        "message": "ok",        "result": 123,        "time": "0000-00-00T00:00:00.000Z"     }});
```
**Example**  
```js
// Use optionsapp.use((req, res) => {     const result = 123;     res.successIf(result, {messageOk: 'all done'});     // Response output example     {        "success": true,        "code": 200,        "message": "all done",        "result": 123,        "time": "0000-00-00T00:00:00.000Z"     }});
```
<a name="response.successIfNotEmpty"></a>

### response.successIfNotEmpty(result, [opts])
Return success result is not empty

**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>result</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr><tr>
    <td>[opts]</td><td><code>Object</code></td><td></td><td><p>option configuration</p>
</td>
    </tr><tr>
    <td>[opts.messageOk]</td><td><code>string</code></td><td><code>&quot;ok&quot;</code></td><td><p>&quot;ok&quot; message</p>
</td>
    </tr><tr>
    <td>[opts.messageFailed]</td><td><code>string</code></td><td><code>&quot;failed&quot;</code></td><td><p>&quot;failed&quot; message</p>
</td>
    </tr><tr>
    <td>[opts.codeOk]</td><td><code>number</code></td><td><code>200</code></td><td><p>status &quot;ok&quot; code</p>
</td>
    </tr><tr>
    <td>[opts.codeFailed]</td><td><code>number</code></td><td><code>500</code></td><td><p>status &quot;failed&quot; code</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// Empty resultapp.use((req, res) => {     const result = [];     res.successIfNotEmpty(result);     // Response output example     {        "success": false,        "code": 500,        "message": "failed",        "result": 0,        "time": "0000-00-00T00:00:00.000Z"     }});
```
**Example**  
```js
// Not empty resultapp.use((req, res) => {     const result = [1, 2, 3];     res.successIfNotEmpty(result);     // Response output example     {        "success": true,        "code": 200,        "message": "ok",        "result": 123,        "time": "0000-00-00T00:00:00.000Z"     }});
```
<a name="response.success400"></a>

### response.success400([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Bad Request&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success401"></a>

### response.success401([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Unauthorized&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success402"></a>

### response.success402([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Payment Required&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success403"></a>

### response.success403([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Forbidden&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success404"></a>

### response.success404([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Not Found&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success405"></a>

### response.success405([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Method Not Allowed&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success406"></a>

### response.success406([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Not Acceptable&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success407"></a>

### response.success407([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Proxy Authentication Required&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success408"></a>

### response.success408([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Request Timeout&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success409"></a>

### response.success409([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Conflict&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success410"></a>

### response.success410([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Gone&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success411"></a>

### response.success411([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Length Required&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success412"></a>

### response.success412([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Precondition Failed&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success413"></a>

### response.success413([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Payload Too Large&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success414"></a>

### response.success414([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;URI Too Long&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success415"></a>

### response.success415([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Unsupported Media Type&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success416"></a>

### response.success416([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Range Not Satisfiable&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success417"></a>

### response.success417([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Expectation Failed&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success418"></a>

### response.success418([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;I&#x27;m a teapot&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success417"></a>

### response.success417([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Expectation Failed&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success421"></a>

### response.success421([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Misdirected Request&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success422"></a>

### response.success422([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Unprocessable Entity&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success423"></a>

### response.success423([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Locked&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success424"></a>

### response.success424([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Failed Dependency&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success425"></a>

### response.success425([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Unordered Collection&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success426"></a>

### response.success426([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Upgrade Required&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success428"></a>

### response.success428([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Precondition Required&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success429"></a>

### response.success429([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Too Many Requests&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success431"></a>

### response.success431([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Request Header Fields Too Large&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success500"></a>

### response.success500([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Internal Server Error&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success501"></a>

### response.success501([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Not Implemented&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success502"></a>

### response.success502([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Bad Gateway&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success503"></a>

### response.success503([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Service Unavailable&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success504"></a>

### response.success504([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Gateway Timeout&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success505"></a>

### response.success505([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;HTTP Version Not Supported&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success506"></a>

### response.success506([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Variant Also Negotiates&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success507"></a>

### response.success507([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Insufficient Storage&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success508"></a>

### response.success508([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Loop Detected&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success509"></a>

### response.success509([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Bandwidth Limit Exceeded&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success510"></a>

### response.success510([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Not Extended&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

<a name="response.success511"></a>

### response.success511([message], [result])
**Kind**: static method of [<code>response</code>](#response)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[message]</td><td><code>string</code></td><td><code>&quot;Network Authentication Required&quot;</code></td><td><p>message string</p>
</td>
    </tr><tr>
    <td>[result]</td><td><code>*</code></td><td></td><td><p>anythings like array, object, string, boolean...</p>
</td>
    </tr>  </tbody>
</table>

