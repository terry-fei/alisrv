var axios = require('axios');

// axios.request({
//   method: 'POST',
//   url: 'http://74727aa009014c6f9a30eea2affca4d5-cn-beijing.alicloudapi.com/neau',
//   data: '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAUADwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDuTyM5rObUSdYhs4lUodwd/RgM4HbjjPXrV59/lv5RHmAHbu6Z7Z9q54W2oWt5YxZtjLulZHJb5iRyWPc15Kd3clIvateX0F9Y2liLcvc+ZzODgbQD2/GpNJv57p7q0vIUju7VgH8s5Rg3Kkd+g/z0FPXLf7XrmjwedLDu8754W2uMKDwfwrUsdOttORxAp3SHMkjtueQ+pJ/E+nJ9a6XGmo3tv/mLoRS6zpsOpJp0l0i3T4xGffoCegJ7AnPI9RV5mSNDI7KiqMszHAAHU+1ec3sBivdY0+7vZbP7VcGVLdLIStcgtlNrA56jGMgZP1rudZuWstHup0txcFU/1bDIIPByPQA5PsKqeHjT5Wuoo3k7CWGs6dqcjpaXCuyDLLtIOPXkCr+zPeuS0m5L+JopZb57xJ7Ro4ZzbGIMVbJUDHOACc++K67nsfyFYOEb2av/AF8jSrDklZCHhgBSsMKaKKiP2vmZ9gzyPxoADAE9aKK3Svv/AFsSB4J+maXOAPriiilDZjYhABz3pR0ooqoJKTE9j//Z',
//   responseType: 'text',
//   headers: {
//     'Content-Type': 'application/octet-stream; charset=utf-8'
//   }
// }).then(res => {
//   console.log(res.data);
// }).catch(e => {
//   console.log(e);
// });
