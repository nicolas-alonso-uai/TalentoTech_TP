export const validateProduct = (product, fileRequired = true) => {
    const errors = {};

    if (!product) {
        errors.general = "El objeto producto está vacío o no ha sido inicializado.";
        return errors;
    }

    if(!product.name.trim()){
        errors.name = "El nombre es obligatorio";
    }

    if(!product.price || product.price <= 0){
        errors.price = "El precio debe ser mayor a 0";
    }

    if(!product.description.trim()){
        errors.description = "La descripción es obligatoria";
    }

    if(!product.category.trim()){
        errors.category = "La categoria es obligatoria";
    }

    if(!fileRequired && !product.file){
        errors.file = "Debes seleccionar una imagen";
    }

    return errors;
}