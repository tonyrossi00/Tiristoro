 const italianToEnglish = {
    "Menù Tiristoro": "Tiristoro Menu",
    "Cliccando su ciascuna voce potrai vedere il prezzo, la descrizione e l'immagine.": 
      "Click on each item to see the price, description, and image.",
    "Bevande": "Drinks",
    "Acqua": "Water",
    "Acqua naturale o frizzante.": "Still or sparkling water.",
    "Caffè": "Coffee",
    "Caffè espresso.": "Espresso coffee.",
    "Caffè Macchiato": "Macchiato Coffee",
    "Caffè espresso con una macchia di latte.": "Espresso coffee with a splash of milk.",
    "Ginseng": "Ginseng",
    "Bevanda al ginseng.": "Ginseng drink.",
    "Thè Pesca": "Peach Tea",
    "Thè freddo al gusto pesca.": "Cold tea with peach flavor.",
    "Thè Limone": "Lemon Tea",
    "Thè freddo al gusto limone.": "Cold tea with lemon flavor.",
    "Succo Pera": "Pear Juice",
    "Succo di pera.": "Pear juice.",
    "Succo Pesca": "Peach Juice",
    "Succo di pesca.": "Peach juice.",
    "Succo Albicocca": "Apricot Juice",
    "Succo di albicocca.": "Apricot juice.",
    "Coca Cola Zero": "Coca Cola Zero",
    "Coca Cola senza zuccheri.": "Sugar-free Coca Cola.",
    "Coca Cola Originale": "Original Coca Cola",
    "Classica Coca Cola.": "Classic Coca Cola.",
    "Da Mangiare": "Food",
    "Tagliere Salumi e Formaggi": "Cold Cuts and Cheese Platter",
    "Assortimento di salumi e formaggi locali.": "Assortment of local cold cuts and cheeses.",
    "Tagliere Parziale": "Partial Platter",
    "Selezione ridotta di salumi e formaggi.": "Reduced selection of cold cuts and cheeses.",
    "Vaschetta Frutta": "Fruit Tray",
    "Assortimento di frutta fresca di stagione (a disponibilità).": "Assortment of seasonal fresh fruit (subject to availability).",
    "Panino Porchetta": "Porchetta Sandwich",
    "Panino farcito con porchetta artigianale.": "Sandwich filled with artisanal porchetta.",
    "Pinsa Trancio": "Slice of Pinsa",
    "Trancio di pinsa farcita.": "Slice of stuffed pinsa.",
    "Birre": "Beers",
    "Birra artigianale tedesca.": "German craft beer.",
    "Birra messicana chiara.": "Light Mexican beer.",
    "Birre Speciali Locali": "Local Specialty Beers",
    "India Pale Ale aromatica.": "Aromatic India Pale Ale.",
    "Birra bionda artigianale non filtrata.": "Unfiltered blonde craft beer.",
    "Birra strong artigianale.": "Strong craft beer.",
    "Birra Kris bionda.": "Kris blonde beer.",
    "Birre Lattina": "Canned Beers",
    "Birra tedesca in lattina.": "German beer in a can.",
    "Birre Bottiglia": "Bottled Beers",
    "Birra analcolica Corona.": "Non-alcoholic Corona beer.",
    "Birra belga rossa.": "Belgian red beer.",
    "Lascia una recensione su Google Maps": "Leave a review on Google Maps",
    "Se ti è piaciuto il nostro servizio, lasciaci una recensione su Google! Ci aiuterai a crescere e a migliorare.":
      "If you enjoyed our service, leave us a review on Google! You will help us grow and improve.",
    "Lascia una recensione": "Leave a review",
    "Dove ci troviamo": "Where to find us",
    "Tiristoro si trova sulle sponde del fiume Tirino, vicino il tour operator Majellando, nei pressi dell’imbarco canoe, in un angolo incontaminato di natura. Un luogo perfetto per rilassarsi dopo un’escursione o un giro in canoa, immersi nel verde della provincia di Pescara.":
      "Tiristoro is located on the banks of the Tirino river, near the Majellando tour operator, close to the canoe launch, in an unspoiled natural corner. A perfect place to relax after a hike or a canoe trip, immersed in the greenery of the Pescara province."
  };

  const translateBtn = document.getElementById('translateBtn');
  let translated = false;

  translateBtn.addEventListener('click', () => {
    if (!translated) {
      // Cambia testi in inglese
      document.querySelector('h1').textContent = italianToEnglish["Menù Tiristoro"];
      document.querySelector('p').textContent = italianToEnglish["Cliccando su ciascuna voce potrai vedere il prezzo, la descrizione e l'immagine."];
      document.querySelector('#leave-review h2').textContent = italianToEnglish["Lascia una recensione su Google Maps"];
      document.querySelector('#leave-review p').textContent = italianToEnglish["Se ti è piaciuto il nostro servizio, lasciaci una recensione su Google! Ci aiuterai a crescere e a migliorare."];
      document.querySelector('#leave-review a').textContent = italianToEnglish["Lascia una recensione"];
      document.querySelector('#dove-siamo h2').textContent = italianToEnglish["Dove ci troviamo"];
      document.querySelector('#dove-siamo p').textContent = italianToEnglish["Tiristoro si trova sulle sponde del fiume Tirino, vicino il tour operator Majellando, nei pressi dell’imbarco canoe, in un angolo incontaminato di natura. Un luogo perfetto per rilassarsi dopo un’escursione o un giro in canoa, immersi nel verde della provincia di Pescara."];

      // Traduci titoli delle sezioni
      document.querySelectorAll('.card > h2').forEach(h2 => {
        if (italianToEnglish[h2.textContent.trim()]) {
          h2.textContent = italianToEnglish[h2.textContent.trim()];
        }
      });

      // Traduci nomi e descrizioni degli item
      document.querySelectorAll('.item').forEach(item => {
        const name = item.getAttribute('data-name');
        const desc = item.getAttribute('data-desc');
        if (italianToEnglish[name]) {
          item.textContent = italianToEnglish[name];
          item.setAttribute('data-name', italianToEnglish[name]);
        }
        if (italianToEnglish[desc]) {
          item.setAttribute('data-desc', italianToEnglish[desc]);
        }
      });

      
      // Cambia testo pulsante in "ENG"
      translateBtn.innerHTML = '<img src="img/bandiera2.png" alt="lingua inglese" style="width: 20px; height: auto; margin-right: 8px; vertical-align: middle;">Eng';
      translated = true;
    } else {
      // Ricarica pagina per tornare in italiano
      location.reload();
    }
  });
