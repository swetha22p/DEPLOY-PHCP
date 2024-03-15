let cacheData="appV1";
this.addEventListener("install" ,(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                  '/static/js/bundle.js',
                  '/index.html',
                  '/',
                  '/home/account',
                  '/home/dashboard',
                  '/data/overview',
                  '/data/details',
                  '/groups/assistants',
                  '/groups/medical-assistants',
                  '/tools/drives-forms',
                  '/tools/screening-apis',
                  '/manifest.json',
                  'favicon.ico',
                  '/assets/icons/web/active/home.svg',
                  '/assets/icons/web/active/hamburger.svg',
                  '/assets/icons/web/active/data.svg',
                  '/assets/icons/web/active/groups.svg',
                  '/assets/icons/web/active/search-icon.svg',
                  '/assets/icons/web/active/signout.svg',
                  '/assets/icons/web/active/tools.svg',
                  '/assets/icons/web/non-active/home.svg',
                  '/assets/icons/web/non-active/hamburger.svg',
                  '/assets/icons/web/non-active/data.svg',
                  '/assets/icons/web/non-active/groups.svg',
                  '/assets/icons/web/non-active/search-icon.svg',
                  '/assets/icons/web/non-active/signout.svg',
                  '/assets/icons/web/non-active/tools.svg',
                  '/assets/icons/mobile/active/data.svg',
                  '/assets/icons/mobile/active/groups.svg',
                  '/assets/icons/mobile/active/home.svg',
                  '/assets/icons/mobile/active/tools.svg',
                  '/assets/icons/mobile/non-active/data.svg',
                  '/assets/icons/mobile/non-active/groups.svg',
                  '/assets/icons/mobile/non-active/home.svg',
                  '/assets/icons/mobile/non-active/tools.svg',
                  '/assets/icons/mobile/non-active/signout.svg',
                  '/assets/icons/common/calendar.svg',
                  '/assets/icons/common/createform.svg',
                  '/assets/icons/common/delete.svg',
                  '/assets/icons/common/fileupload.svg',
                  '/assets/icons/common/info.svg',
                  '/assets/icons/common/user.svg',
                  '/assets/images/banner.svg',
                  '/assets/images/user_profile.svg',
                  '/assets/icons/web/non-active/user.svg',
                 
                
    



                  
                //   '/users',
            ]);
        })
    );
});

// this.addEventListener("fetch",(event)=>{
//     event.respondWith(
//         caches.match(event.request).then((resp)=>{
//             if(resp){
//                 return resp
//             }
//         })
//     )
// })

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp;
                } else if (event.request.url.includes('/test/audio_')) {
                    // If the request is for an audio file, attempt to serve it from cache
                    return caches.match(event.request.url);
                } else {
                    // For other requests, fetch from the network
                    let requestUrl = event.request.clone();
                    return fetch(requestUrl);
                }
            }).catch((error) => {
                console.error('Fetch error:', error);
                // Handle fetch errors, e.g., return a custom offline page
            })
        );
    }
});


    // })
    // event.respondWith(
    //     caches.match(event.request).then((resp) => {
    //         return resp || fetch(event.request).then((response) => {
    //             return caches.open(cacheData).then((cache) => {
    //                 cache.put(event.request, response.clone());
    //                 return response;
    //             });
    //         });
    //     }).catch(() => {
    //         console.error('Fetch error:', error);
    //         // Handle errors, e.g., return a custom offline page
    //     })
//     )
// }
// });
