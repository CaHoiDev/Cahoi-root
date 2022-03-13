package zombie

class Zombie(private var id: String,
             private var name: String,
             private var hp: Float,
             private var speed: Float,
             private var damage: Float,
             private var armor: Float)
{

    override fun toString(): String {
        return "Zombie(id = '$id', name = '$name', hp = $hp, speed = $speed, damage = $damage, armor = $armor)"
    }

    fun attack(): Float{
        return this.damage
    }

    fun beAttacked(damage: Float) {
//        setArmor()
    }

    fun beAttackedByTrueDame(damage: Float) {
        setHp(getHp() - damage)
    }

    fun getId(): String {
        return id
    }

    fun getHp(): Float{
        return this.hp
    }

    fun setHp(newHp: Float){
        this.hp = newHp
    }

    fun getArmor(): Float{
        return this.armor
    }

    fun setArmor(newArmor: Float){
        this.armor = newArmor
    }

}