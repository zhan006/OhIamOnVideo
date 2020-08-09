const OnVideo = ()=>{
	var videos = document.getElementsByTagName("video");
	var stream = navigator.mediaDevices.getUserMedia({video:true,audio:true});
	stream.then((media)=>{
		for(v of videos){
			v.srcObject = media;
			v.onloadedmetadata = ()=>{v.play()}
		}
	})
}
OnVideo()