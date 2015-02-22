# -*- coding: utf-8 -*-
"""
Created on Sat Feb 21 15:46:19 2015

@author: Eshaan
"""

from Tkinter import *

class Application(Frame):

    def __determine_best_attack(self, defenseArray):
        total = sum(defenseArray)
        defenseArray = sorted(defenseArray)
        secondLargest = defenseArray[len(defenseArray)-2]
        
        
    
    def say_hi(self):
        print "hi there, everyone!"

    def createWidgets(self):
        self.size = (400,400)
        self.QUIT = Button(self)
        self.QUIT["text"] = "QUIT"
        self.QUIT["fg"]   = "red"
        self.QUIT["command"] =  self.quit

        self.QUIT.pack({"side": "left"})

        self.hi_there = Button(self)
        self.hi_there["text"] = "Hello",
        self.hi_there["command"] = self.say_hi

        self.hi_there.pack({"side": "left"})

    def __init__(self, master=None):
        Frame.__init__(self, master)
        self.pack()
        self.createWidgets()

root = Tk()
root.minsize(400,400)
app = Application(master=root)

app.mainloop()
root.destroy()