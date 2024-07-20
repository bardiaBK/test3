<script type="text/javascript">
function search() {
    let filter = document.getElementById('find').value.toUppercase();

    let item = document.querySelectorAll('.play-buybeats');

    let l = document.getElementsByClassName('play-buybeats-p');

    for(var i = 0;i<=l.length;i++){
        let a=item[i].getElementsByClassName('play-buybeats-p')[0];

        let value=a.innerHTML || a.innerHTML || a.textContent;

        if(value.toUppercase().indexOf(filter) > -1) {
            item[i].style.display="";
        }

        else
        {
            item[i].style.display="none";
        }
    }
}
</script>
