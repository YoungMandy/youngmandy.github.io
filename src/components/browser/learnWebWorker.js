self.onmessage = function(event) { 
  console.log('self.onmessage',event)
  const data = event.data;
  let num = 0;

  for (let i = 0; i < data; i++) { 
    num += num+1;
  }
  self.postMessage(num);
}
