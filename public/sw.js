//sw.js

self.addEventListener('install', (a) => {
    console.log('서비스워커 설치!')
})

self.addEventListener('activate', (a) => {
    console.log('서비스워커 동작 시작되고 있음...')
})

self.addEventListener('fetch', (a) => {
    console.log('데이터 요청시 처리....')
})



self.addEventListener('message', (e) => {
    console.log('메세지가?....', e.data)
    const option = {
        body: e.data.message,
        icon:'favicon.ico',   /*제목옆에 작은 원형이미지*/ 
        image:'istockphoto-612x612.jpg', /*내용 썸네일*/ 
        badge:'milky-way.jpg',  /*이건 모바일로 확인해야한다.*/ 
        vibrate:[200, 100, 300],  /*폰 진동 ms 단위, 후에*/ 
        actions:[
            {action:'open', title:'자세히보기'},
            {action:'close', title:'닫기'}
        ]
    }
  
    self.registration.showNotification('title',option );
  })
  
  
  
  self.addEventListener('notificationclick', (e) => {
    console.log(e)
    console.log(e.action)
    console.log(clients)
    e.waitUntil(
  
      self.clients.matchAll().then(function(clientList) {
        if(e.action == 'open'){
            return self.clients.openWindow('https://naver.com')
            // window.openWindow('https://naver.com')
        } else {
            return e.notification.close();
        }
      })
  
    );
    
  })