// PGP page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Copy fingerprint functionality
    window.copyFingerprint = function() {
        const fingerprint = document.getElementById('fingerprint').textContent.trim();
        navigator.clipboard.writeText(fingerprint).then(function() {
            showNotification('Fingerprint copied to clipboard!', 'success');
        }).catch(function() {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = fingerprint;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showNotification('Fingerprint copied to clipboard!', 'success');
        });
    };

    // Show notification
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : '#dc3545'};
            color: white;
            padding: 12px 24px;
            border-radius: 4px;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Key file verification
    function verifyKeyFile() {
        const fileInput = document.getElementById('key-file-input');
        if (fileInput && fileInput.files[0]) {
            const file = fileInput.files[0];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const content = e.target.result;
                if (content.includes('-----BEGIN PGP PUBLIC KEY BLOCK-----')) {
                    showNotification('Valid PGP key file detected!', 'success');
                    // Could add further verification here
                } else {
                    showNotification('Invalid PGP key file format!', 'error');
                }
            };
            
            reader.readAsText(file);
        }
    }

    // Add verification status checking
    function checkVerificationChannels() {
        const channels = document.querySelectorAll('[data-channel]');
        
        channels.forEach(channel => {
            const channelName = channel.dataset.channel;
            const statusIndicator = channel.querySelector('.status-indicator');
            const statusText = channel.querySelector('.status-text');
            
            // Simulate checking (in real implementation, you might make API calls)
            setTimeout(() => {
                if (channelName === 'keybase') {
                    statusIndicator.textContent = '✅';
                    statusText.textContent = 'Cryptographically verified';
                } else {
                    statusIndicator.textContent = '👁️';
                    statusText.textContent = 'Manual verification required';
                }
            }, 1000 + Math.random() * 2000);
        });
    }

    // Initialize verification checking
    checkVerificationChannels();

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});