/******************************
tvsource-input 为 textarea 的 ID
inputBrow    上传按钮id
*******************************/
	// 支持文件拖放
	function importTxt() {

	}
	// 支持文件拖放
	function dragenter(e) {
		e.stopPropagation();
		e.preventDefault();
	}

	function dragover(e) {
		e.stopPropagation();
		e.preventDefault();
	}

	function drop(e) {
		e.stopPropagation();
		e.preventDefault();
		var dt = e.dataTransfer;
		var files = dt.files;
		if (files.length) {
			var file = files[0];
			var reader = new FileReader();
			reader.onload = function () {
				document.getElementById("tvsource-input").value = this.result;
			};
			reader.readAsText(file, document.getElementById("encoding").value);
			reader = null;
		}
	}
	var dropbox = document.getElementById("tvsource-input");
	dropbox.addEventListener("dragenter", dragenter, false);
	dropbox.addEventListener("dragover", dragover, false);
	dropbox.addEventListener("drop", drop, false);

	(function () {
		var input = document.querySelector('#inputBrow');
		var span = document.querySelector('#tvsource-input');
		input.addEventListener('change', function (e) {
			handFile(e.target.files[0]);
		});

		function handFile(file) {
			console.log('hand');
			var reader = new FileReader();
			reader.onload = function (e) {
				span.value = e.target.result;
			};
			reader.readAsText(file, document.getElementById("encoding").value);
			reader = null;
		}
	})();
    /////====
function copy(){
    var content=document.getElementById("contents");
    content.select();
    document.execCommand("Copy"); 
}

/////====
 function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}     

    function downloadmitv() {
      const m3uContent = document.getElementById('contents').value;
      const blob = new Blob([m3uContent], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'tvlist.m3u';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }                                                                                                                                                                                                                                                                                                                                              
}                                                                                        