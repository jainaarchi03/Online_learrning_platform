import React from 'react';

const Footer = () => {
  return (
    // <!-- Footer -->
<footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between items-center">

            {/* <!-- Company Information --> */}
            <div class="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 class="text-lg font-semibold">About Us</h3>
                <p class="mt-2 text-sm">
                    Our company is dedicated to providing the best online learning experience with a focus on quality content and user-friendly interface.
                </p>
            </div>

            {/* <!-- Social Media Links --> */}
            <div class="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 class="text-lg font-semibold">Follow Us</h3>
                <div class="flex mt-4 space-x-4">
                    <a href="https://www.facebook.com/" class="text-gray-400 hover:text-white">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* <!-- Facebook Icon --> */}
                            <path d="M22.675 0h-21.35c-.734 0-1.325.591-1.325 1.325v21.351c0 .733.591 1.324 1.325 1.324h11.495v-9.281h-3.123v-3.622h3.123v-2.674c0-3.097 1.893-4.785 4.66-4.785 1.325 0 2.464.098 2.794.142v3.24h-1.916c-1.504 0-1.795.716-1.795 1.763v2.313h3.586l-.467 3.622h-3.119v9.281h6.113c.734 0 1.325-.591 1.325-1.324v-21.351c0-.734-.591-1.325-1.325-1.325z"/>
                        </svg>
                    </a>
                    <a href="https://x.com/?lang=en-in&mx=2" class="text-gray-400 hover:text-white">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* <!-- Twitter Icon --> */}
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.575 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.719 0-4.922 2.203-4.922 4.917 0 .385.043.76.127 1.12-4.09-.205-7.719-2.164-10.148-5.144-.424.727-.667 1.571-.667 2.475 0 1.71.87 3.213 2.188 4.099-.807-.026-1.567-.247-2.228-.616v.062c0 2.385 1.697 4.374 3.95 4.826-.413.111-.849.171-1.296.171-.317 0-.626-.031-.929-.088.631 1.953 2.445 3.376 4.604 3.415-1.685 1.321-3.808 2.109-6.115 2.109-.397 0-.788-.023-1.174-.068 2.179 1.397 4.768 2.211 7.548 2.211 9.057 0 14.009-7.509 14.009-14.008 0-.213-.004-.425-.014-.636.964-.696 1.8-1.562 2.459-2.549z"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/" class="text-gray-400 hover:text-white">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* <!-- Instagram Icon --> */}
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.415.594.222 1.02.488 1.473.941.453.453.719.879.941 1.473.175.46.361 1.26.415 2.43.058 1.267.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.415 2.43-.222.594-.488 1.02-.941 1.473-.453.453-.879.719-1.473.941-.46.175-1.26.361-2.43.415-1.267.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.415-.594-.222-1.02-.488-1.473-.941-.453-.453-.719-.879-.941-1.473-.175-.46-.361-1.26-.415-2.43-.058-1.267-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.415-2.43.222-.594.488-1.02.941-1.473.453-.453.879-.719 1.473-.941.46-.175 1.26-.361 2.43-.415 1.267-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.67.012-4.947.07-1.272.058-2.15.247-2.91.526-.787.289-1.453.677-2.111 1.335-.658.658-1.046 1.324-1.335 2.111-.279.76-.468 1.638-.526 2.91-.058 1.277-.07 1.688-.07 4.947s.012 3.67.07 4.947c.058 1.272.247 2.15.526 2.91.289.787.677 1.453 1.335 2.111.658.658 1.324 1.046 2.111 1.335.76.279 1.638.468 2.91.526 1.277.058 1.688.07 4.947.07s3.67-.012 4.947-.07c1.272-.058 2.15-.247 2.91-.526.787-.289 1.453-.677 2.111-1.335.658-.658 1.046-1.324 1.335-2.111.279-.76.468-1.638.526-2.91.058-1.277.07-1.688.07-4.947s-.012-3.67-.07-4.947c-.058-1.272-.247-2.15-.526-2.91-.289-.787-.677-1.453-1.335-2.111-.658-.658-1.324-1.046-2.111-1.335-.76-.279-1.638-.468-2.91-.526-1.277-.058-1.688-.07-4.947-.07z"/>
                            <path d="M12 5.838c-3.403 0-6.162 2.758-6.162 6.162 0 3.404 2.758 6.162 6.162 6.162 3.404 0 6.162-2.758 6.162-6.162 0-3.403-2.758-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4c2.209 0 4 1.791 4 4s-1.791 4-4 4zm6.406-11.845c-.796 0-1.44.644-1.44 1.44 0 .795.644 1.44 1.44 1.44.795 0 1.44-.645 1.44-1.44 0-.796-.645-1.44-1.44-1.44z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/home?originalSubdomain=in" class="text-gray-400 hover:text-white">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* <!-- LinkedIn Icon --> */}
                            <path d="M19.916 3h-15.832c-1.791 0-3.084 1.293-3.084 3.084v15.832c0 1.791 1.293 3.084 3.084 3.084h15.832c1.791 0 3.084-1.293 3.084-3.084v-15.832c0-1.791-1.293-3.084-3.084-3.084zm-11.666 18.832h-2.915v-11.666h2.915v11.666zm-1.459-13.333c-.932 0-1.691-.759-1.691-1.691s.759-1.691 1.691-1.691c.932 0 1.691.759 1.691 1.691s-.759 1.691-1.691 1.691zm13.125 13.333h-2.914v-5.709c0-1.36-.027-3.109-1.891-3.109-1.891 0-2.179 1.477-2.179 3.003v5.814h-2.914v-11.666h2.797v1.597h.04c.39-.735 1.347-1.513 2.776-1.513 2.97 0 3.52 1.957 3.52 4.501v7.081z"/>
                        </svg>
                    </a>
                </div>
            </div>
            {/* <!-- Quick Links --> */}
            <div class="w-full md:w-1/3">
                <h3 class="text-lg font-semibold">Quick Links</h3>
                <ul class="mt-2 space-y-2 text-sm">
                    <li><a href="/" class="hover:underline">Home</a></li>
                    <li><a href="/courses" class="hover:underline">Courses</a></li>
                    <li><a href="/about" class="hover:underline">About Us</a></li>
                    <li><a href="/contact" class="hover:underline">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div class="mt-8 border-t border-gray-700 pt-4 text-center">
            <p class="text-sm">&copy; 2024 LearnSphere. All rights reserved.</p>
        </div>
    </div>
</footer>

  );
};

export default Footer;
