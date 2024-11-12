function loadFeature(featureId) {
    const contentDiv = document.getElementById('implementation-content');
    if (featureId === 'feature1') {
      contentDiv.innerHTML = '<h2>Feature 1 Content Here</h2>';
    } else if (featureId === 'feature2') {
      contentDiv.innerHTML = '<h2>Feature 2 Content Here</h2>';
    }
  }
  