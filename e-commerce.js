function Product(name,category,image,price,gender,sold){
    this.name=name;
    this.category=category;
    this.image=image;
    this.price=price;
    this.gender=gender;
    this.sold=sold;
}
document.getElementById('add').addEventListener('click',function(){
    const name=document.getElementById("name").value;
    const category=document.getElementById("category").value;
    const image=document.getElementById("image").value;
    const price=document.getElementById("price").value;
    const gender=document.getElementById("gender").value;
    const sold=document.getElementById("sold").checked;
    const newProduct =new Product(name,category,image,price,gender,sold);
    let products = JSON.parse(localStorage.getItem('Products')) || [];

            // Add new product to the array
            products.push(newProduct);

            // Save updated array back to local storage
            localStorage.setItem('Products', JSON.stringify(products));

            // Clear the form
            document.getElementById('productForm').reset();

            alert('Product added successfully!');


})