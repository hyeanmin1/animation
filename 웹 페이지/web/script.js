const IMG = new Image();
        IMG.src = 'w91CgcVR0CxvKA7VmxNu4TxyGqGXeWLjjyuGxRFbboluBdfXuCCfL_JXFgEnLtC-c9vMdCPh5ZCE-geGI2uUjmOxR1jimqSnYshtvWjiSinDHHCuOcKrt1hxsaP-7MDKoEaH9BEh4UhBBsj-xqwDOw.webp';

        IMG.addEventListener('load', function() {
            console.log('높이:', this.naturalHeight, '너비:', this.naturalWidth, '이미지:', this.src);

            const element = document.getElementById('animeImage');
            element.style.position = 'relative';
            element.style.top = '50px';
            element.style.left = '20px';    
        });