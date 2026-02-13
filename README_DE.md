<div align="center">

# 🚀 F2F.icu

**Einfaches, schnelles und sicheres Peer-to-Peer-Dateiübertragungstool**

[English](./README.md) | [简体中文](./README_ZH.md) | [日本語](./README_JA.md) | [한국어](./README_KO.md) | [Français](./README_FR.md) | [Español](./README_ES.md) | Deutsch

[![GitHub stars](https://img.shields.io/github/stars/isnl/f2f?style=flat-square&logo=github)](https://github.com/isnl/f2f/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/isnl/f2f?style=flat-square&logo=github)](https://github.com/isnl/f2f/network)
[![GitHub issues](https://img.shields.io/github/issues/isnl/f2f?style=flat-square&logo=github)](https://github.com/isnl/f2f/issues)
[![GitHub license](https://img.shields.io/github/license/isnl/f2f?style=flat-square)](https://github.com/isnl/f2f/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/isnl/f2f/pulls)

[![Deploy with Cloudflare Pages](https://img.shields.io/badge/Deploy%20with-Cloudflare%20Pages-F38020?style=flat-square&logo=cloudflare)](https://pages.cloudflare.com/)
[![Powered by Workers](https://img.shields.io/badge/Powered%20by-Cloudflare%20Workers-F38020?style=flat-square&logo=cloudflare)](https://workers.cloudflare.com/)

[🌐 Live-Demo](https://f2f.icu) | [📖 Dokumentation](https://github.com/isnl/f2f) | [🐛 Fehler melden](https://github.com/isnl/f2f/issues) | [💡 Funktionsvorschläge](https://github.com/isnl/f2f/issues/new)

</div>

---

## ✨ Funktionen

<table>
  <tr>
    <td align="center">🚀</td>
    <td><b>Blitzschnell</b><br/>Betrieben durch Cloudflares globales Edge-Netzwerk mit Antwortzeiten im Millisekundenbereich</td>
    <td align="center">🔐</td>
    <td><b>6-stelliger Freigabecode</b><br/>Einfach und einprägsam, mit 2,18 Milliarden Kombinationen für maximale Sicherheit</td>
  </tr>
  <tr>
    <td align="center">📦</td>
    <td><b>Große Dateien</b><br/>Einzeldatei bis zu 25 MB, perfekt für den täglichen Bedarf</td>
    <td align="center">📝</td>
    <td><b>Mehrere Formate</b><br/>Unterstützung für Dateien, Text, Bilder und verschiedene Inhaltstypen</td>
  </tr>
  <tr>
    <td align="center">📚</td>
    <td><b>Stapel-Upload</b><br/>Mehrere Dateien (bis zu 100) und Bilder (bis zu 25) gleichzeitig hochladen</td>
    <td align="center">📦</td>
    <td><b>ZIP-Download</b><br/>Mehrere Dateien/Bilder als einzelnes ZIP-Paket herunterladen</td>
  </tr>
  <tr>
    <td align="center">⏱️</td>
    <td><b>Automatische Löschung</b><br/>Automatisch 1 Minute nach dem Download gelöscht, um die Privatsphäre zu schützen</td>
    <td align="center">🆓</td>
    <td><b>Völlig kostenlos</b><br/>Basierend auf Cloudflares kostenlosem Tarif, keine Kreditkarte erforderlich</td>
  </tr>
  <tr>
    <td align="center">🎨</td>
    <td><b>Schöne Oberfläche</b><br/>Modernes UI-Design mit herausragender Benutzererfahrung</td>
    <td align="center">📱</td>
    <td><b>Responsives Design</b><br/>Perfekte Unterstützung für Mobilgeräte, Tablets und Desktop</td>
  </tr>
</table>

## 🎯 Live-Demo

👉 **Besuchen Sie: [https://f2f.icu](https://f2f.icu)**

<div align="center">
  <img src="https://img.shields.io/badge/Demo-Available-success?style=for-the-badge" alt="Demo verfügbar"/>
</div>

## 📸 Vorschau

<details>
<summary>Klicken Sie hier, um Screenshots der Benutzeroberfläche anzuzeigen</summary>

### Sende-Oberfläche
![Sende-Oberfläche](./docs/imgs/send.png)

### Empfangs-Oberfläche
![Empfangs-Oberfläche](./docs/imgs/receive.png)

</details>

## 🛠️ Technologie-Stack

<div align="center">

| Technologie | Beschreibung |
|-------------|-------------|
| ⚡️ **Cloudflare Pages** | Frontend-Hosting für statische Webseiten mit globalem CDN |
| 🔥 **Cloudflare Workers** | Serverlose Backend-API mit Edge Computing |
| 💾 **Cloudflare KV** | Key-Value-Speicher mit nativer TTL-Unterstützung |
| 🎨 **Tailwind CSS** | Modernes CSS-Framework für schnelle UI-Entwicklung |
| 📝 **TypeScript** | Typsicheres JavaScript-Superset |

</div>

## 🚀 Schnellstart

### Voraussetzungen

- ✅ Node.js 16+
- ✅ Cloudflare-Konto (kostenloser Tarif reicht aus)
- ✅ Git

### Sofort-Bereitstellung

#### Methode 1: Fork und Bereitstellung (Empfohlen)

1. **Dieses Repository forken**

   Klicken Sie oben rechts auf die Schaltfläche `Fork`

2. **Mit Cloudflare Pages verbinden**

   - Melden Sie sich beim [Cloudflare Dashboard](https://dash.cloudflare.com/) an
   - Gehen Sie zu `Workers & Pages` → `Create application` → `Pages` → `Connect to Git`
   - Wählen Sie Ihr geforktes Repository aus
   - Build-Konfiguration:
     - **Build command**: Leer lassen (oder `npm run build`)
     - **Output directory**: `public`
   - Klicken Sie auf `Save and Deploy`

3. **KV-Speicher konfigurieren**

   - Gehen Sie im Dashboard zu `Workers & Pages` → `KV`
   - Klicken Sie auf `Create a namespace` und benennen Sie ihn `f2f-transfers`
   - Gehen Sie zurück zu Ihrem Pages-Projekt → `Settings` → `Functions` → `KV namespace bindings`
   - Binding hinzufügen:
     - **Variable name**: `TRANSFERS`
     - **KV namespace**: Wählen Sie `f2f-transfers`
   - Speichern und neu bereitstellen

4. **Fertig! 🎉**

   Besuchen Sie die von Cloudflare bereitgestellte Domain

#### Methode 2: Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/isnl/f2f.git
cd f2f

# Abhängigkeiten installieren
npm install

# KV-Namespace erstellen
wrangler kv:namespace create "TRANSFERS"

# wrangler.toml konfigurieren
# Fügen Sie die generierte Namespace-ID zur wrangler.toml hinzu

# Lokalen Entwicklungsserver starten
npm run dev

# Besuchen Sie http://localhost:8788
```

### Konfigurationsdatei

Bearbeiten Sie `wrangler.toml`:

```toml
name = "f2f-transfer"
compatibility_date = "2025-11-20"

pages_build_output_dir = "public"

[[kv_namespaces]]
binding = "TRANSFERS"
id = "your_kv_namespace_id_here"          # Ersetzen Sie durch Ihre Produktions-KV-ID
preview_id = "your_preview_kv_id_here"    # Ersetzen Sie durch Ihre Vorschau-KV-ID
```

## 📖 Benutzerhandbuch

### 📤 Dateien/Text senden

1. Wechseln Sie zum Tab **Senden**
2. Geben Sie einen 6-stelligen Freigabecode ein oder generieren Sie einen (unterstützt Großbuchstaben A-Z und Ziffern 0-9)
3. Wählen Sie den Inhaltstyp:
   - **Datei**: Zum Hochladen klicken oder per Drag-and-Drop ablegen (unterstützt mehrere Dateien, bis zu 100, insgesamt ≤25 MB)
   - **Text**: Textinhalt direkt eingeben
   - **Bild**: Bild auswählen oder Strg/Cmd + V zum Einfügen eines Screenshots (unterstützt mehrere Bilder, bis zu 25)
4. Klicken Sie auf **Freigabe erstellen**
5. Kopieren Sie den Freigabecode oder Link und senden Sie ihn an den Empfänger

### 📥 Dateien/Text empfangen

1. Wechseln Sie zum Tab **Empfangen**
2. Geben Sie den 6-stelligen Abholcode ein
3. Klicken Sie auf **Inhalt abrufen**
4. Download-Optionen:
   - **Einzelne Datei**: Automatischer Download
   - **Mehrere Dateien/Bilder**: Einzeln oder als ZIP-Paket herunterladen
   - **Text/Bild**: Direkte Vorschau-Anzeige
5. ⚠️ Der Inhalt wird **nach 1 Minute automatisch gelöscht**, bitte speichern Sie ihn umgehend

## ⚙️ Funktionsweise

```mermaid
graph LR
    A[Absender-Upload] --> B[In Base64 konvertieren]
    B --> C[In KV speichern]
    C --> D[Freigabecode generieren]
    D --> E[Empfänger gibt Code ein]
    E --> F[Aus KV lesen]
    F --> G[Als heruntergeladen markieren]
    G --> H[1-Minuten-TTL setzen]
    H --> I[Automatisch löschen]
```

### Datenfluss

1. **Upload-Phase**
   - Datei → Base64-Kodierung → In KV speichern
   - Standard-TTL: 1 Stunde (automatische Löschung nach 1 Stunde, wenn nicht heruntergeladen)

2. **Download-Phase**
   - Freigabecode überprüfen → Daten lesen
   - Als heruntergeladen markieren → TTL auf 1 Minute aktualisieren
   - Automatischer Browser-Download (Dateien) oder Anzeige (Text/Bilder)

3. **Bereinigungsphase**
   - KV löscht abgelaufene Daten automatisch basierend auf TTL
   - Kein Wartungsaufwand

### Warum KV-Speicher?

| Merkmal | KV-Speicher | R2 Object Storage | D1 Database |
|---------|-------------|-------------------|-------------|
| Einzelwertgröße | **25 MB** ✅ | 5 GB | 1 MB (erfordert Sharding) |
| TTL-Unterstützung | **Nativ** ✅ | ❌ Manuelle Implementierung | ❌ Manuelle Implementierung |
| Lese-/Schreiblatenz | **Sehr niedrig** ✅ | Niedrig | Niedriger |
| Kostenloser Tarif | **100.000 Lesevorgänge/Tag** ✅ | Erfordert Kreditkarte | 10 Datenbanken |
| Anwendungsfall | **Temporäre Dateispeicherung** ✅ | Große Dateispeicherung | Strukturierte Daten |

## 🔒 Sicherheit

| Punkt | Beschreibung |
|-------|-------------|
| 🔢 **Code-Stärke** | 6 Zeichen (A-Z, 0-9), ~2,18 Milliarden Kombinationen |
| ⏰ **Datenspeicherung** | Nicht heruntergeladen: 1 Stunde / Heruntergeladen: 1 Minute |
| ⚠️ **Datenschutzhinweis** | Nicht empfohlen für vertrauliche Informationen (Passwörter, Ausweise usw.) |
| 🔐 **Übertragungssicherheit** | Vollständige HTTPS-Verschlüsselung |

## 📊 Einschränkungen

- **Dateigröße**: Maximal 25 MB insgesamt
- **Dateianzahl**: Bis zu 100 Dateien oder 25 Bilder pro Übertragung
- **Freigabecode-Format**: 6-stellige Großbuchstaben oder Ziffern (A-Z, 0-9)
- **Datenspeicherung**:
  - Nicht heruntergeladen: Automatische Löschung nach 1 Stunde
  - Heruntergeladen: Automatische Löschung nach 1 Minute
- **KV Kostenloser Tarif**:
  - 100.000 Lesevorgänge pro Tag
  - 1.000 Schreibvorgänge pro Tag
  - Ausreichend für den persönlichen Gebrauch

## 📝 API-Dokumentation

### POST `/api/upload`

Datei oder Text hochladen

**Anfrageparameter (FormData):**

```typescript
{
  code: string,       // 6-stelliger Freigabecode (erforderlich)
  type: 'file' | 'text' | 'files' | 'images',  // Inhaltstyp (erforderlich)
  content: string,    // Inhalt (erforderlich)
                      // - file: Base64-kodierter Dateiinhalt
                      // - text: Klartext-Inhalt
                      // - files: JSON-Array [{dataUrl, name, size, type}, ...]
                      // - images: JSON-Array [{dataUrl, name}, ...]
  fileName?: string   // Dateiname (erforderlich wenn type=file)
}
```

**Antwort:**

```typescript
{
  success: true,
  code: string,       // Freigabecode
  message: string     // Statusnachricht
}
```

### GET `/api/download`

Datei herunterladen oder Text abrufen

**Anfrageparameter:**

```
?code=ABC123  // 6-stelliger Abholcode
```

**Antwort:**

```typescript
{
  success: true,
  type: 'file' | 'text' | 'files' | 'images',
  content: string,      // Base64, Text oder JSON-Array
  contentType: string,  // MIME-Typ
  fileName?: string     // Dateiname (wird bei type=file zurückgegeben)
}
```

## 🎨 Anpassung

### Dateigrößenlimit ändern

Bearbeiten Sie `functions/api/upload.ts`:

```typescript
const maxSize = 25 * 1024 * 1024; // Ändern Sie auf Ihre gewünschte Größe (Bytes)
```

### Datenspeicherzeit ändern

**Upload-TTL** (nicht heruntergeladen):

```typescript
// functions/api/upload.ts
expirationTtl: 3600 // 1 Stunde = 3600 Sekunden, anpassbar
```

**Download-TTL** (heruntergeladen):

```typescript
// functions/api/download.ts
expirationTtl: 60 // 1 Minute = 60 Sekunden, anpassbar
```

## 🚀 Leistungsoptimierung

### Frontend-Optimierung

- ✅ Tailwind CSS bedarfsgesteuertes Laden
- ✅ Lazy Loading von Icons (Lucide Icons)
- ✅ Responsive Bildvorschau
- ✅ Debouncing und Throttling

### Backend-Optimierung

- ✅ Edge Computing (Cloudflare Workers)
- ✅ Globale CDN-Beschleunigung
- ✅ KV-Speicher mit niedriger Latenz

### Empfehlungen

1. Cloudflares Brotli-Komprimierung aktivieren
2. Benutzerdefinierte Domain mit HTTPS konfigurieren
3. Cloudflare Analytics zur Verkehrsüberwachung aktivieren
4. Cloudflare Workers Analytics zur Überwachung der API-Leistung verwenden

## 🤝 Mitwirken

Wir freuen uns über alle Formen von Beiträgen! 🎉

### Wie Sie beitragen können

1. **Dieses Repository forken**
2. **Einen Feature-Branch erstellen** (`git checkout -b feature/TollesFunktion`)
3. **Änderungen committen** (`git commit -m 'Add some AmazingFeature'`)
4. **Zum Branch pushen** (`git push origin feature/TollesFunktion`)
5. **Pull Request einreichen**

### Arten von Beiträgen

- 🐛 Fehler melden
- 💡 Neue Funktionen vorschlagen
- 📖 Dokumentation verbessern
- 🎨 UI/UX optimieren
- ⚡️ Leistung optimieren
- 🌍 Mehrsprachige Unterstützung

### Entwicklungsrichtlinien

- TypeScript-Konventionen einhalten
- Code sauber und lesbar halten
- Notwendige Kommentare hinzufügen
- Funktionen vor dem Einreichen testen

## 🌟 Danksagungen

Vielen Dank an die folgenden Technologien und Projekte:

- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting für statische Webseiten
- [Cloudflare Workers](https://workers.cloudflare.com/) - Serverlose Computing-Plattform
- [Tailwind CSS](https://tailwindcss.com/) - CSS-Framework
- [Lucide Icons](https://lucide.dev/) - Open-Source-Icon-Bibliothek

## 📄 Lizenz

Dieses Projekt ist unter der [MIT](LICENSE)-Lizenz lizenziert - siehe die LICENSE-Datei für Details

## 💬 Kontakt

- 🐛 **Fehler melden**: [GitHub Issues](https://github.com/isnl/f2f/issues)
- 💡 **Funktionsvorschläge**: [GitHub Discussions](https://github.com/isnl/f2f/discussions)
- 📧 **E-Mail-Kontakt**: [Über GitHub](https://github.com/isnl)

## ❓ Häufig gestellte Fragen

<details>
<summary><b>Warum nicht R2 Object Storage verwenden?</b></summary>

R2 Object Storage erfordert die Hinterlegung einer Kreditkarte, während KV-Speicher völlig kostenlos und sofort einsatzbereit ist. Für temporäre Dateiübertragungen unter 25 MB ist KV-Speicher vollkommen ausreichend und bietet zudem eine geringere Latenz.
</details>

<details>
<summary><b>Wie kann man das Dateigrößenlimit ändern?</b></summary>

Ändern Sie die Konstante `maxSize` in `functions/api/upload.ts`. Beachten Sie:
- Der KV-Einzelwert beträgt maximal 25 MB
- Dateien über 25 MB erfordern R2 Object Storage
- Größere Dateien benötigen längere Upload-/Download-Zeiten
</details>

<details>
<summary><b>Sind die Daten wirklich sicher?</b></summary>

- ✅ Alle Daten werden auf Cloudflare-Edge-Knoten mit physischer Sicherheit gespeichert
- ✅ Vollständig HTTPS-verschlüsselte Übertragung
- ✅ Automatischer Löschmechanismus zum Schutz der Privatsphäre
- ⚠️ Geringe Wahrscheinlichkeit, dass der 6-stellige Code erraten wird
- ⚠️ Nicht empfohlen für hochsensible Informationen (Passwörter, private Schlüssel usw.)
</details>

<details>
<summary><b>Warum wird 1 Minute nach dem Download gelöscht und nicht sofort?</b></summary>

Dies bietet den Nutzern eine Fehlertoleranz:
- Vermeidung von Download-Fehlern durch Netzwerklatenz
- Ermöglicht Nutzern einen erneuten Download
- Die 1-Minuten-Autolöschung bietet eine gute Balance zwischen Komfort und Sicherheit

Sie können diese Zeit im Code anpassen.
</details>

<details>
<summary><b>Reicht der kostenlose Tarif aus?</b></summary>

Für den persönlichen Gebrauch mehr als ausreichend:
- **KV-Lesevorgänge**: 100.000 pro Tag
- **KV-Schreibvorgänge**: 1.000 pro Tag
- **Workers-Anfragen**: 100.000 pro Tag

Für Teams oder intensive Nutzung müssen Sie möglicherweise auf einen kostenpflichtigen Tarif upgraden.
</details>

<details>
<summary><b>Kann ich es selbst hosten?</b></summary>

Auf jeden Fall! Dieses Projekt ist Open Source, Sie können:
1. Dieses Repository forken
2. In Ihrem eigenen Cloudflare-Konto bereitstellen
3. Domain und Konfiguration anpassen
4. Volle Kontrolle über Daten und Dienst haben
</details>

<details>
<summary><b>Wird Stapel-Upload unterstützt?</b></summary>

✅ **Ja!** Die aktuelle Version unterstützt Stapel-Upload:
- **Mehrere Dateien**: Bis zu 100 Dateien, Gesamtgröße nicht über 25 MB
- **Mehrere Bilder**: Bis zu 25 Bilder, Gesamtgröße nicht über 25 MB
- **Download-Optionen**: Einzeln oder als einzelnes ZIP-Paket herunterladen
</details>

<details>
<summary><b>Wie kann man Nutzungsstatistiken einsehen?</b></summary>

Im Cloudflare Dashboard können Sie Folgendes einsehen:
- **Workers Analytics**: API-Aufrufanzahl, Antwortzeit usw.
- **KV Metrics**: Lese-/Schreibanzahl, Speicherauslastung usw.
- **Pages Analytics**: Datenverkehr, geografische Verteilung usw.
</details>

---


## ⭐ Star-Verlauf

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=isnl/f2f&type=Date)](https://star-history.com/#isnl/f2f&Date)

</div>

---

<div align="center">

### 🌟 Wenn dieses Projekt Ihnen hilft, geben Sie ihm bitte einen Star!

**Made with ❤️ by [isnl](https://github.com/isnl)**

[⬆ Zurück nach oben](#-f2ficu)

</div>
