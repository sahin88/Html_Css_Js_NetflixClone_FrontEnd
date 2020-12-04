const tabItems=document.querySelectorAll('.tab-item');
const tabContentItems=document.querySelectorAll('.tab-content-item');

function selectItem(e) {
    deleteBorder();
    deleteShowClass();
    this.classList.add('tab-border');
    console.log(this.id )
    const tabContentItem=document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');

}

function deleteBorder(){
    tabItems.forEach(item=> item.classList.remove('tab-border'));
}
function deleteShowClass(){
    tabContentItems.forEach(item=> item.classList.remove('show'));
}


tabItems.forEach(item=>item.addEventListener('click', selectItem));