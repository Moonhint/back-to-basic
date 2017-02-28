def time_diff_milli(start, finish)
   (finish - start) * 1000.0
end

class FiboMatrix

  def initialize(n=0)
    @a = [1,1,1,0]
    @v = [1,0]
    @n = n
  end

  def power( x, n )
    if ( n == 0 )
      0
  	elsif ( n == 1 )
  		x
    elsif ( n%2 == 0 )
  		power( multiply(x, x), n/2 )
    else
  	  multiply(x, power( multiply(x, x), n/2 ) )
    end
  end

  def multiply(x,y)
  	if ( y.length == 2 )
  		a = x[0]*y[0]+x[1]*y[1]
  		b = x[2]*y[0]+x[3]*y[1]
  		return [a,b]
    else
    	a = x[0]*y[0] + x[1]*y[2]
    	b = x[0]*y[1] + x[1]*y[3]
    	c = x[2]*y[0] + x[3]*y[2]
    	d = x[2]*y[1] + x[3]*y[3]
    	return [a,b,c,d]
    end
  end

  def result
    multiply(power(@a,@n-1),@v)[0]
  end
end


t1 = Time.now

m = FiboMatrix.new(8181)
puts m.result

t2 = Time.now

msecs = time_diff_milli t1, t2

puts ""
puts "Start Time: " + t1.to_s
puts "End Time: " + t2.to_s
puts "Execute Time: " + msecs.to_s + "ms"
