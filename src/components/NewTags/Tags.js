import React from 'react'

export const Tags = () => {
    return (

        <div class="relative flex flex-col w-[400px] mx-auto">
            {/* New inputs: List with data and time */}
            <input list="languages" type="text" />
            <datalist id="languages">
                <option value="JavaScript"></option>
                <option value="Java"></option>
                <option value="Swift"></option>
            </datalist>

            <input list="popularHours" type="time" />
            <datalist id="popularHours">
                <option value="12:00"></option>
                <option value="13:00"></option>
                <option value="14:00"></option>
            </datalist>

            
            {/* Dialog Box (Missing logic with JS: https://www.youtube.com/watch?v=8tFa7f3ZdJk)*/}
            <dialog>
                <button autofocus>Close</button>
                <p>Kitesurf!</p>
            </dialog>
            
            
            {/* Popover */}
            <button class="bg-blue-300 rounded-lg border border-8  p-5 font-bold text-xl underline " popovertarget="my-popover">Open popover</button>
            <div class="absolute top-0 left-0 bg-red text-white rounded-lg border p-5 font-bold text-xl underline " popover id="my-popover">Greetings, devs!</div>

            {/* search Bar */}
            <search>
                <form action="./searasdasdch/">
                    <label for="movie">Buscar pelicula</label>
                    <input type="search" id="movie" name="q" />
                    <button type="submit" class="bg-green-300 rounded-lg border font-bold text-lg">Buscar</button>
                </form>
            </search>

            {/* Tags to import images and video */}
            <form action="server.cgi" method="post" enctype="multipart/form-data">
                <input type="file" name="image" accept="imagd/*" capture="user" />
                <input type="file" name="video" accept="video/*" capture="environnent" /> 
                <input type="submit" value="Upload" />
            </form>

        </div>
    )
}
