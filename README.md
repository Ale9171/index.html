# index.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VAL_STORE💋 - Catálogo Exclusivo</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Hanken Grotesk', sans-serif; background-color: #fbf9f9; color: #000; }
        .btn-whatsapp { background-color: #E01E37; color: white; transition: transform 0.2s; }
        .product-card { transition: all 0.3s ease; border: 1px solid #eee; }
        #modal { display: none; background: rgba(0,0,0,0.95); transition: all 0.3s ease; }
    </style>
</head>
<body>

    <!-- CABECERA -->
    <nav class="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50 flex items-center justify-between shadow-sm">
        <div class="flex items-center gap-2">
            <span class="font-bold text-2xl tracking-tighter">VAL_STORE💋</span>
        </div>
        <!-- REEMPLAZA TU_NUMERO (Ej: 5215512345678) -->
        <a href="https://wa.me/TU_NUMERO" class="btn-whatsapp px-5 py-2 rounded-full text-xs font-bold uppercase shadow-md">WhatsApp</a>
    </nav>

    <!-- TÍTULO -->
    <header class="text-center py-10 bg-white">
        <h1 class="text-3xl font-bold mb-1">Catálogo de Temporada</h1>
        <p class="text-gray-400 text-sm uppercase tracking-widest">Marcas Exclusivas • Piezas Únicas</p>
    </header>

    <!-- GALERÍA DE PRODUCTOS -->
    <main class="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="galeria">
        
        <!-- PRODUCTO #1 (Copia este bloque para agregar más ropa) -->
        <div class="product-card bg-white rounded-xl overflow-hidden shadow-sm" 
             onclick="verProducto('LINK_FOTO_IMGBB', 'NOMBRE_PRENDA', 'PRECIO', 'TALLA', 'ESTADO')">
            <div class="aspect-[3/4] relative">
                <img src="LINK_FOTO_IMGBB" class="w-full h-full object-cover">
            </div>
            <div class="p-3">
                <p class="text-[10px] text-gray-400 font-bold uppercase">MARCA</p>
                <h3 class="text-sm font-semibold truncate">NOMBRE_PRENDA</h3>
                <p class="font-bold text-black mt-1">PRECIO</p>
            </div>
        </div>
        <!-- FIN PRODUCTO #1 -->

    </main>

    <!-- VENTANA DE ZOOM (MODAL) -->
    <div id="modal" class="fixed inset-0 z-[60] flex flex-col items-center justify-center p-4" onclick="cerrar()">
        <img id="m-img" class="max-w-full max-h-[65vh] rounded-lg shadow-2xl mb-6">
        <div class="bg-white p-6 rounded-3xl w-full max-w-sm text-center shadow-2xl" onclick="event.stopPropagation()">
            <h2 id="m-titulo" class="text-2xl font-bold text-black mb-1"></h2>
            <p id="m-precio" class="text-[#E01E37] font-bold text-3xl mb-4"></p>
            <div class="flex justify-center gap-3 mb-6">
                <span id="m-talla" class="bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold"></span>
                <span id="m-estado" class="bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold"></span>
            </div>
            <button onclick="comprarPorWA()" class="btn-whatsapp w-full py-4 rounded-2xl font-bold text-lg shadow-lg">Lo quiero 💋</button>
            <p class="text-gray-400 text-xs mt-4 uppercase">Toca afuera para cerrar</p>
        </div>
    </div>

    <script>
        let itemActual = "";
        function verProducto(img, titulo, precio, talla, estado) {
            itemActual = titulo;
            document.getElementById('m-img').src = img;
            document.getElementById('m-titulo').innerText = titulo;
            document.getElementById('m-precio').innerText = precio;
            document.getElementById('m-talla').innerText = "Talla: " + talla;
            document.getElementById('m-estado').innerText = estado;
            document.getElementById('modal').style.display = 'flex';
        }
        function cerrar() { document.getElementById('modal').style.display = 'none'; }
        function comprarPorWA() {
            const num = "TU_NUMERO"; // REEMPLAZA AQUÍ TAMBIÉN
            const msg = encodeURIComponent("¡Hola Val! Me interesa el artículo: " + itemActual);
            window.location.href = "https://wa.me/" + num + "?text=" + msg;
        }
    </script>
</body>
</html>
