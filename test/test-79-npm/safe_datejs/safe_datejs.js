'use strict';

require('safe_datejs');
var today = new Date(2011, 11, 12, 0, 0, 0, 0);
var wrap = today.AsDateJs();
if (wrap.is().today() === false) {
  console.log('ok');
}
