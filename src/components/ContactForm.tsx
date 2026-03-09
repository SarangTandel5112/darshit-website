import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactForm() {

const navigate = useNavigate();

const [formData, setFormData] = useState({
fullname: "",
country: "",
email: "",
phone: "",
product: "",
enquiry: ""
});

const [errors, setErrors] = useState<any>({});

const handleChange = (e:any) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});

setErrors({
...errors,
[e.target.name]: ""
});
};

const validate = () => {

let newErrors:any = {};

if(!formData.fullname.trim())
newErrors.fullname = "Please enter your full name.";

if(!formData.country.trim())
newErrors.country = "Please enter your country.";

if(!formData.email.trim())
newErrors.email = "Please enter your email address.";

if(!formData.phone.trim())
newErrors.phone = "Please enter your phone number.";

if(!formData.product.trim())
newErrors.product = "Please select a product category.";

if(!formData.enquiry.trim())
newErrors.enquiry = "Please enter your enquiry.";

setErrors(newErrors);

return Object.keys(newErrors).length === 0;

};

const handleSubmit = async (e:any) => {

e.preventDefault();

if(!validate()) return;

const data = {
fields: [
{ name: "firstname", value: formData.fullname },
{ name: "lastname", value: formData.country },
{ name: "email", value: formData.email },
{ name: "phone", value: formData.phone },
{ name: "product_of_interest", value: formData.product },
{ name: "message", value: formData.enquiry }
],
context: {
pageUri: window.location.href,
pageName: document.title
}
};

await fetch(
"https://api.hsforms.com/submissions/v3/integration/submit/245281281/38ae65c9-9cf2-4a7a-b63b-f5cd65ffd5de",
{
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data)
}
);

navigate("/thank-you");

};

return (

<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

{/* Full Name */}
<div className="flex flex-col gap-1">
<label className="text-sm font-medium text-gray-700">
Full Name <span className="text-red-500">*</span>
</label>

<input
type="text"
name="fullname"
placeholder="Enter your full name"
value={formData.fullname}
onChange={handleChange}
className="border border-gray-300 rounded-md px-4 py-3"
/>

{errors.fullname && (
<p className="text-red-500 text-sm">{errors.fullname}</p>
)}

</div>

{/* Country */}
<div className="flex flex-col gap-1">
<label className="text-sm font-medium text-gray-700">
Country <span className="text-red-500">*</span>
</label>

<input
type="text"
name="country"
placeholder="Enter where are you from"
value={formData.country}
onChange={handleChange}
className="border border-gray-300 rounded-md px-4 py-3"
/>

{errors.country && (
<p className="text-red-500 text-sm">{errors.country}</p>
)}

</div>

{/* Email */}
<div className="flex flex-col gap-1">
<label className="text-sm font-medium text-gray-700">
Email <span className="text-red-500">*</span>
</label>

<input
type="email"
name="email"
placeholder="Enter your email address"
value={formData.email}
onChange={handleChange}
className="border border-gray-300 rounded-md px-4 py-3"
/>

{errors.email && (
<p className="text-red-500 text-sm">{errors.email}</p>
)}

</div>

{/* Phone */}
<div className="flex flex-col gap-1">
<label className="text-sm font-medium text-gray-700">
Phone Number <span className="text-red-500">*</span>
</label>

<PhoneInput
country={"in"}
enableSearch={true}
searchPlaceholder="Search country..."
value={formData.phone}
onChange={(phone)=>setFormData({...formData, phone})}
inputClass="!w-full !h-[46px]"
containerClass="w-full"
/>

{errors.phone && (
<p className="text-red-500 text-sm">{errors.phone}</p>
)}

</div>

{/* Product */}
<div className="flex flex-col gap-1 md:col-span-2">
<label className="text-sm font-medium text-gray-700">
Product of Interest <span className="text-red-500">*</span>
</label>

<select
name="product"
value={formData.product}
onChange={handleChange}
className="border border-gray-300 rounded-md px-4 py-3"
>

<option value="">Select Product category</option>

<option value="Dehydrated Red Onion">Dehydrated Red Onion</option>
<option value="Dehydrated White Onion">Dehydrated White Onion</option>
<option value="Dehydrated Pink Onion">Dehydrated Pink Onion</option>
<option value="Dehydrated Garlic">Dehydrated Garlic</option>
<option value="Oilseeds">Oilseeds</option>
<option value="Psyllium Husk">Psyllium Husk</option>
<option value="Jaggery">Jaggery</option>
<option value="Agro and Allied Food Products">Agro and Allied Food Products</option>
<option value="Spices">Spices</option>
<option value="Value Added Dehydrated Products">Value Added Dehydrated Products</option>

</select>

{errors.product && (
<p className="text-red-500 text-sm">{errors.product}</p>
)}

</div>

{/* Message */}
<div className="flex flex-col gap-1 md:col-span-2">
<label className="text-sm font-medium text-gray-700">
Your Enquiry <span className="text-red-500">*</span>
</label>

<textarea
name="enquiry"
placeholder="Write your enquiry"
value={formData.enquiry}
onChange={handleChange}
rows={4}
className="border border-gray-300 rounded-md px-4 py-3"
/>

{errors.enquiry && (
<p className="text-red-500 text-sm">{errors.enquiry}</p>
)}

</div>

<button
type="submit"
className="bg-[#599e2d] text-white px-8 py-3 rounded-md md:col-span-2 w-full mt-4"
>
Submit Enquiry
</button>

</form>

);
}