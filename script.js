const vdoel = document.getElementById('video');
const btn = document.getElementById('button');

async function selectMedia() {

    try {
        const medstream = await navigator.mediaDevices.getDisplayMedia();
        vdoel.srcObject = medstream;

        vdoel.onloadedmetadata = () => {

            vdoel.play();

        }

    } catch (error) {

        console.log(error);

    }
}

btn.addEventListener('click', async() => {

    btn.disabled = true;

    await vdoel.requestPictureInPicture();


    btn.disabled = false;



});


selectMedia();