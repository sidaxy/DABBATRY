<script>
  // Try to autoplay the audio when the page loads
  window.addEventListener('load', () => {
      const audio = document.getElementById('pageLoadAudio');
      
      // Attempt to play the audio
      audio.play().catch(error => {
          console.warn('Autoplay blocked by browser. Audio did not play.', error);
      });
  });
</script>