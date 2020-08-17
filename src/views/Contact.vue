<template>
    <div class="contact">
        <div class=" u-pt-4xl u-wrapper md:u-pt-0">
            <h1>Contact</h1>
            <p>
                Feel free to give Lisa Aust a call, text or email:
            </p>
            <p>
                605-940-5773<br />
                lisa-aust@outlook.com
            </p>
        </div>
        
        <section class="u-bg-gray-100 u-py-2xl">
            <div class="u-max-w-700 u-wrapper">
                <form method="post">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name">
                    
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject">
                    
                    <label for="message">Message</label>
                    <textarea id="message" name="message"></textarea>
                    
                    <input type="submit">
                </form>
            </div>
        </section>
    </div>
</template>
