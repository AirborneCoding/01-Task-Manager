const getFormValues = (form) => {
    // const title = formData.get("title")
    // console.log([...formData.entries()]);
    // console.log([...formData.values()]);


    const formData = new FormData(form)
    const values = [...formData.values()]
    const isEmpthy = values.includes("")
    const data = Object.fromEntries(formData)

    return { isEmpthy, data }
}



export default getFormValues