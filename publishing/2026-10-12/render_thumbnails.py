#!/usr/bin/env python3
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT=Path(__file__).resolve().parents[2]
manifest=json.loads((Path(__file__).with_name('manifest.json')).read_text())
bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf'
regular='/System/Library/Fonts/Supplemental/Arial.ttf'
palettes=[('#0B1F3A','#2563EB','#5EEAD4'),('#112D4E','#3F72AF','#F9D949'),('#172554','#1D4ED8','#67E8F9'),('#0F172A','#0F766E','#FDE68A'),('#1E1B4B','#6D28D9','#A7F3D0'),('#042F2E','#0D9488','#FDBA74'),('#1E293B','#0369A1','#FACC15'),('#312E81','#4F46E5','#6EE7B7'),('#082F49','#0284C7','#FDE047'),('#134E4A','#0F766E','#FCA5A5'),('#1E3A8A','#2563EB','#99F6E4'),('#27272A','#0E7490','#FDE68A'),('#111827','#4338CA','#5EEAD4'),('#172554','#0891B2','#FBBF24'),('#0F172A','#1D4ED8','#A7F3D0'),('#1E1B4B','#0F766E','#FDBA74'),('#082F49','#4F46E5','#FDE047')]

def wrap(draw,text,font,width):
    lines=[]; current=''
    for word in text.split():
        trial=f'{current} {word}'.strip()
        if draw.textbbox((0,0),trial,font=font)[2] <= width: current=trial
        else:
            if current: lines.append(current)
            current=word
    if current: lines.append(current)
    return lines

items=[(x,'BLOG') for x in manifest['blog']]+[(x,'RESEARCH') for x in manifest['research']]
out=ROOT/'public'/'featured'; out.mkdir(parents=True,exist_ok=True)
for idx,(item,kind) in enumerate(items):
    bg,blue,accent=palettes[idx]
    im=Image.new('RGB',(1200,675),bg); draw=ImageDraw.Draw(im)
    # Distinct provider-comparison motif: offset cards and connected checkpoints.
    for n in range(4):
        x=860+n*62-(idx%4)*18; y=50+n*46+(idx%3)*12
        draw.rounded_rectangle((x,y,x+250,y+155),radius=24,outline=blue if n%2==0 else accent,width=10)
        draw.ellipse((x+27,y+28,x+57,y+58),fill=accent)
        draw.line((x+78,y+43,x+206,y+43),fill=blue,width=8)
        draw.line((x+27,y+91,x+206,y+91),fill=blue,width=7)
    draw.rounded_rectangle((64,58,260 if kind=='BLOG' else 305,108),radius=20,fill=accent)
    draw.text((88,73),kind,font=ImageFont.truetype(bold,24),fill=bg)
    size=51 if len(item['title'])<70 else 45
    title_font=ImageFont.truetype(bold,size)
    lines=wrap(draw,item['title'],title_font,790)
    y=160
    for line in lines:
        draw.text((64,y),line,font=title_font,fill='white'); y+=size+10
    draw.line((64,566,1136,566),fill=blue,width=4)
    footer=ImageFont.truetype(regular,24)
    draw.text((64,603),'VIRTUAL ASSISTANT PROVIDER',font=footer,fill='white')
    draw.text((981,603),'FIELD GUIDE',font=footer,fill=accent)
    target=ROOT/'public'/item['thumbnail'].lstrip('/')
    im.save(target,'PNG',optimize=True)
    with Image.open(target) as check: assert check.size==(1200,675)
print(f'Rendered {len(items)} unique 1200x675 exact-title thumbnails')
